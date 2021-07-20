import '@css/request.scoped.css';
import * as echarts from 'echarts';
import { useState, useEffect } from 'react';
import { getAllData } from '@api/api';

function Request() {
  let [user, setUser] = useState('');

  const getData = () => {
    return getAllData().then((reply) => {
      return reply.data;
    });
  };

  const renderLowSubItemBarPlot = (dataSet) => {
    let xaxis = [];
    let data = [];
    let color = [];
    dataSet.forEach((i) => {
      xaxis.push(i.item_name);
      data.push(i.count);
      color.push(i.color);
    });
    let myChart = echarts.init(document.getElementById('chart'));
    myChart.clear(); // clear canvas before plotting
    let option = {
      title: {},
      tooltip: {
        trigger: 'axis',
        position: function(pt) {
          return [pt[0], '10%'];
        },
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
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
          triggerEvent: true,
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

  useEffect(async () => {
    let chartData = await getData();
    renderLowSubItemBarPlot(chartData);
  }, []);

  return (
    <>
      <div id="chart" />
    </>
  );
}

export default Request;
