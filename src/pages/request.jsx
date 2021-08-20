// import react
import { useState, useEffect } from 'react';
// import npm
import * as echarts from 'echarts';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
// import style
import '@css/request.scoped.css';
// import assets
// import api
import { getProductDataURL, getChartDataURL } from '@api/api';
// import helper
import { useFetch } from '@pages/utils/common';
// import components

const Select = ({ onChange }) => {
  const [value, setValue] = useState(0);
  const [item, setItem] = useState('');
  const { data: typelist, isPending, error } = useFetch(getProductDataURL);

  const onLabelChange = (e) => {
    setValue(e.target.value);
    onChange(e.target.value); // props 的 onChange 指向 parent 的 selectValueChange
  };

  const renderButton = (dataSet) => {
    console.log(dataSet);
    let selectAll = [
      <FormControlLabel className="selectoption" key={0} value="全部" label="全部" control={<Radio />} />,
    ];
    let items = Object.keys(dataSet).map((i, index) => {
      return <FormControlLabel className="selectoption" key={index + 1} value={i} label={i} control={<Radio />} />;
    });
    setItem(selectAll.concat(items));
  };

  useEffect(async () => {
    if (isPending) setItem('   ');
    if (!isPending && typelist) renderButton(typelist);
  }, [isPending, typelist]);

  return (
    <RadioGroup row className="select" onChange={onLabelChange} value={value}>
      {item}
    </RadioGroup>
  );
};

const Request = () => {
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
    let option = {
      title: {
        text: '热点趋势图',
        left: 'center',
        textStyle: {
          fontSize: 14,
        },
      },
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        data: dataSet.dateArr,
        boundaryGap: false,
      },
      yAxis: {},
      series: [
        { data: dataSet.data['营销'], name: '营销', type: 'line', color: dataSet.color },
        { data: dataSet.data['商品'], name: '商品', type: 'line', color: dataSet.color },
        { data: dataSet.data['服务'], name: '服务', type: 'line', color: dataSet.color },
        { data: dataSet.data['物流'], name: '物流', type: 'line', color: dataSet.color },
        { data: dataSet.data['质量'], name: '质量', type: 'line', color: dataSet.color },
        { data: dataSet.data['退换'], name: '退换', type: 'line', color: dataSet.color },
      ],
    };
    myChart.setOption(option);
  };

  const handleTypeChange = (e) => {
    let newChartData =
      e == '全部'
        ? chartData
        : chartData.filter((i) => {
            return i.parent_item_name == e;
          });
    renderBarChart(newChartData);
    // renderLineChart(newChartData);
  };

  useEffect(async () => {
    if (!chatDataPending && chartData) {
      renderBarChart(chartData);
      // renderLineChart(chartData);
    }
  }, [chatDataPending, chartData]);

  return (
    <>
      <Select onChange={handleTypeChange} />
      <div id="bar_chart" />
      {/* <div id="line_chart" /> */}
    </>
  );
};

export default Request;
