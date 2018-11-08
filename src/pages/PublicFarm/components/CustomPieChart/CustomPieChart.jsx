import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import ReactEcharts from 'echarts-for-react';
import axios from 'axios';

/**
 * 图表来源参考：http://gallery.echartsjs.com/editor.html?c=xBJSFJgFFf
 */
export default class CustomPieChart extends Component {
  static displayName = 'CustomPieChart';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      man: 0,
      woman: 0,
      Apig: 0,
      otherpig: 0
    };
  }

  componentDidMount() {
    axios
      .get('/mock/publicFarmpie.json')
      .then((response) => {
        console.log(response.data.data);
        let man_ave = response.data.data.man/(response.data.data.man + response.data.data.woman)*100;
        let woman_ave = response.data.data.woman/(response.data.data.man + response.data.data.woman)*100;
        var man = Math.round(man_ave*100)/100;   
        var woman = Math.round(woman_ave*100)/100;

        let Apig_ave = response.data.data.Apig/(response.data.data.Apig + response.data.data.otherpig)*100;
        let otherpig_ave = response.data.data.otherpig/(response.data.data.Apig + response.data.data.otherpig)*100;
        var Apig = Math.round(Apig_ave*100)/100;   
        var otherpig = Math.round(otherpig_ave*100)/100;

        this.setState({
          man : man,
          woman : woman,
          Apig,
          otherpig,
        });
      })
      .catch((error) => {
        console.log(error);
      }); 
  }

  getOption = () => {
    const man = this.state.man;
    const woman = this.state.woman;
    const Apig = this.state.Apig;
    const otherpig = this.state.otherpig;
    const Icons = {
      man: require('./images/TB1ek8heL9TBuNjy0FcXXbeiFXa-12-26.png'),
      woman: require('./images/TB1zi90eSBYBeNjy0FeXXbnmFXa-12-26.png'),
      Apig: require('./images/TB1fA8heL9TBuNjy0FcXXbeiFXa-24-21.png'),
      otherpig: require('./images/TB1fCxOeN9YBuNjy0FfXXXIsVXa-24-24.png'),
    };
    return {
      backgroundColor: '#fff',
      tooltip: {
        formatter: '{b} ({c})',
      },
      grid: [
        {
          show: false,
          left: '15%',
          top: '70%',
          width: '30%',
          height: 120,
        },
        {
          show: false,
          left: '55%',
          top: '70%',
          width: '30%',
          height: 120,
        },
      ],
      xAxis: [
        {
          gridIndex: 0,
          type: 'value',
          min: -50,
          max: 180,
          axisLine: {
            show: true,
            lineStyle: {
              color: '#999',
              type: 'dashed',
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
        {
          gridIndex: 1,
          type: 'value',
          min: -50,
          max: 180,
          axisLine: {
            show: true,
            lineStyle: {
              color: '#999',
              type: 'dashed',
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
      ],
      yAxis: [
        {
          gridIndex: 0,
          type: 'category',
          axisLine: {
            show: false,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#999',
              type: 'dashed',
            },
          },
          data: ['雄猪', '雌猪'],
          inverse: true,
          axisLabel: {
            color: '#666',
            fontsize: 14,
            width: 55,
            margin: -65,
            rich: {
              man: {
                height: 25,
                align: 'center',
                backgroundColor: {
                  image: Icons.man,
                },
              },
              men: {
                height: 25,
                align: 'center',
                backgroundColor: {
                  image: Icons.woman,
                },
              },
            },
          },
        },
        {
          gridIndex: 1,
          type: 'category',
          axisLine: {
            show: false,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#999',
              type: 'dashed',
            },
          },
          data: ['A级猪', '其他等级猪'],
          inverse: true,
          axisLabel: {
            color: '#666',
            fontsize: 14,
            width: 55,
            margin: -65,
            rich: {
              Apig: {
                height: 20,
                align: 'center',
                backgroundColor: {
                  image: 'Icons.Apig',
                },
              },
              otherpig: {
                height: 20,
                align: 'center',
                backgroundColor: {
                  image: Icons.otherpig,
                },
              },
            },
          },
        },
      ],
      series: [
        {
          name: '雌雄占比',
          type: 'pie',
          radius: '35%',
          center: ['30%', '40%'],
          clockwise: false,
          data: [
            {
              value: man,
              name: '雄猪',
            },
            {
              value: woman,
              name: '雌猪',
            },
          ],
          itemStyle: {
            normal: {
              color: (params) => {
                const colorList = ['#44a3fc', '#f0647c'];
                return colorList[params.dataIndex];
              },
            },
          },
          label: {
            normal: {
              show: false,
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
          },
        },
        {
          name: '性别外圈',
          type: 'pie',
          radius: ['40%', '40%'],
          center: ['30%', '40%'],
          clockwise: false,
          hoverAnimation: false,
          data: [
            {
              value: 4,
              name: '',
              itemStyle: {
                normal: {
                  label: {
                    show: false,
                  },
                  labelLine: {
                    show: false,
                  },
                  color: 'rgba(0, 0, 0, 0)',
                },
              },
            },
            {
              value: man,
              name: '雄猪',
              itemStyle: {
                normal: {
                  borderWidth: 1,
                  borderColor: '#44a3fc',
                },
              },
            },
            {
              value: 4,
              name: '',
              itemStyle: {
                normal: {
                  label: {
                    show: false,
                  },
                  labelLine: {
                    show: false,
                  },
                  color: 'rgba(0, 0, 0, 0)',
                },
              },
            },
            {
              value: woman,
              name: '雌猪',
              itemStyle: {
                normal: {
                  borderWidth: 1,
                  borderColor: '#f0647c',
                },
              },
            },
          ],

          label: {
            normal: {
              show: false,
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
          },
        },
        {
          name: '性别',
          type: 'pictorialBar',
          symbol: 'rect',
          data: [
            {
              value: man,
              symbolRepeat: true,
              symbolSize: [6, 23],
              symbolMargin: 2,
            },
            {
              value: woman,
              symbolRepeat: true,
              symbolSize: [6, 23],
              symbolMargin: 2,
            },
          ],
          itemStyle: {
            normal: {
              color: (params) => {
                const colorList = ['#44a3fc', '#f0647c'];
                return colorList[params.dataIndex];
              },
            },
          },
          label: {
            normal: {
              show: true,
              color: '#666',
              fontSize: 15,
              position: [120, 10],
              formatter: '{c}%',
            },
          },
          xAxisIndex: 0,
          yAxisIndex: 0,
          barWidth: '50%',
        },
        {
          name: 'A级猪占比',
          type: 'pie',
          radius: '35%',
          center: ['70%', '40%'],
          clockwise: false,
          data: [
            {
              value: Apig,
              name: 'A级猪',
            },
            {
              value: otherpig,
              name: '其他等级猪',
            },
          ],
          itemStyle: {
            normal: {
              color: (params) => {
                const colorList = ['#fad551', '#57cc78'];
                return colorList[params.dataIndex];
              },
            },
          },
          label: {
            normal: {
              show: false,
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
          },
        },
        {
          name: '城乡外圈',
          type: 'pie',
          radius: ['40%', '40%'],
          center: ['70%', '40%'],
          clockwise: false,
          hoverAnimation: false,
          data: [
            {
              value: 4,
              name: '',
              itemStyle: {
                normal: {
                  label: {
                    show: false,
                  },
                  labelLine: {
                    show: false,
                  },
                  color: 'rgba(0, 0, 0, 0)',
                },
              },
            },
            {
              value: Apig,
              name: 'A级猪',
              itemStyle: {
                normal: {
                  borderWidth: 1,
                  borderColor: '#fad551',
                },
              },
            },
            {
              value: 4,
              name: '',
              itemStyle: {
                normal: {
                  label: {
                    show: false,
                  },
                  labelLine: {
                    show: false,
                  },
                  color: 'rgba(0, 0, 0, 0)',
                },
              },
            },
            {
              value: otherpig,
              name: '其他等级猪',
              itemStyle: {
                normal: {
                  borderWidth: 1,
                  borderColor: '#57cc78',
                },
              },
            },
          ],

          label: {
            normal: {
              show: false,
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
          },
        },
        {
          name: '城乡',
          type: 'pictorialBar',
          symbol: 'rect',
          data: [
            {
              value: Apig,
              symbolRepeat: true,
              symbolSize: [6, 23],
              symbolMargin: 2,
            },
            {
              value: otherpig,
              symbolRepeat: true,
              symbolSize: [6, 23],
              symbolMargin: 2,
            },
          ],
          itemStyle: {
            normal: {
              color: (params) => {
                const colorList = ['#fad551', '#57cc78'];
                return colorList[params.dataIndex];
              },
            },
          },
          label: {
            normal: {
              show: true,
              color: '#666',
              fontSize: 15,
              position: [120, 10],
              formatter: '{c}%',
            },
          },
          xAxisIndex: 1,
          yAxisIndex: 1,
          barWidth: '50%',
        },
      ],
    };
  };

  render() {
    return (
      <div className="custom-pie-chart">
        <IceContainer>
          <ReactEcharts option={this.getOption()} style={{ height: '500px' }} />
        </IceContainer>
      </div>
    );
  }
}
