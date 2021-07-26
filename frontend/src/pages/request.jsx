// import react
import { useState, useEffect } from 'react';
// import npm
import * as echarts from 'echarts';
import { Radio } from 'antd';
// import style
import '@css/request.scoped.css';
// import assets
// import api
import { getProductDataURL, getChartDataURL } from '@api/api';
// import helper
import { useFetch } from '@pages/common/common';
// import components

const Select = (props) => {
  const [value, setValue] = useState(0);
  const [item, setItem] = useState('');
  const { data: typelist, isPending, error } = useFetch(getProductDataURL);

  const onChange = (e) => {
    setValue(e.target.value);
    props.onChange(e.target); // props 的 onChange 指向 parent 的 selectValueChange
  };

  const renderButton = (dataSet) => {
    let selectAll = [
      <Radio className="selectoption" key={0} value={0} text="全部" style={{ color: 'white' }}>
        全部
      </Radio>,
    ];
    let items = Object.keys(dataSet).map((i, index) => {
      return (
        <Radio className="selectoption" key={index + 1} value={index + 1} text={i} style={{ color: dataSet[i] }}>
          {i}
        </Radio>
      );
    });
    setItem(selectAll.concat(items));
  };

  useEffect(async () => {
    if (isPending) setItem('   ');
    if (!isPending && typelist) renderButton(typelist);
  }, [isPending, typelist]);

  return (
    <Radio.Group className="select" onChange={onChange} value={value}>
      {item}
    </Radio.Group>
  );
};

const Request = () => {
  let [user, setUser] = useState('');
  const { data: chartData, isPending: chatDataPending, error: chartDataError } = useFetch(getChartDataURL);
  const { data: typelist, isPending: typePending, error: typeError } = useFetch(getProductDataURL);

  const renderBarChart = (dataSet) => {
    let xaxis = [];
    let data = [];
    let color = [];
    dataSet.forEach((i) => {
      xaxis.push(i.item_name);
      data.push(i.count);
      color.push(i.color);
    });
    let myChart = echarts.init(document.getElementById('bar_chart'));
    myChart.clear();
    let option = {
      title: {},
      tooltip: {
        trigger: 'axis',
        position: function(pt) {
          return [pt[0], '10%'];
        },
        axisPointer: {
          type: 'shadow',
        },
        formatter: function(params) {
          let res = '';
          for (let i = 0, l = params.length; i < l; i++) {
            res += '特征: ' + params[i].name;
            return res;
          }
        },
      },
      xAxis: [
        {
          type: 'category',
          triggerEvent: true,
          data: xaxis,
          axisTick: {
            alignWithLabel: true,
          },
          axisLabel: {
            rotate: 40,
            fontSize: 14 + Math.log(24 / dataSet.length),
            color: 'white',
          },
        },
      ],
      yAxis: {
        type: 'value',
      },
      dataZoom: [
        {
          type: 'slider',
          startValue: 0,
          endValue: 12,
        },
        {
          type: 'inside',
          startValue: 0,
          endValue: 12,
        },
      ],
      series: [
        {
          name: '数值',
          type: 'bar',
          barWidth: '60%',
          data: data,
          label: {
            position: 'top',
            show: true,
            color: 'white',
          },
          itemStyle: {
            normal: {
              color: function(params) {
                return color[params.dataIndex];
              },
            },
          },
          barMaxWidth: '90',
        },
      ],
    };
    myChart.off('click');
    myChart.setOption(option);
  };

  const renderLineChart = (dataSet) => {
    let myChart = echarts.init(document.getElementById('line_chart'));
    myChart.clear();
    let option = {};
    myChart.setOption(option);
  };

  const handelTypeChange = (e) => {
    let newChartData =
      e.value == 0
        ? chartData
        : chartData.filter((i) => {
            return i.parent_item_name == e.text;
          });
    renderBarChart(newChartData);
    renderLineChart(newChartData);
  };

  useEffect(async () => {
    if (!chatDataPending && chartData) {
      renderBarChart(chartData);
      renderLineChart(chartData);
    }
  }, [chatDataPending, chartData]);

  return (
    <>
      <Select onChange={handelTypeChange} />
      <div id="bar_chart" />
      <div id="line_chart" />
    </>
  );
};

export default Request;
