import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Chart, Geom, Tooltip, Coord, Label, Legend, Guide } from 'bizcharts';
import { DataView } from '@antv/data-set';
import axios from 'axios';

export default class ChartFunnel extends Component {
  static displayName = 'ChartFunnel';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
    };
  }

  componentWillMount() {
    axios
      .get('/mock/farmFunnel.json')
      .then((response) => {
        console.log(response.data.data);
        this.setState({
        num1 : response.data.data.num60,
        num2 : response.data.data.num120,
        num3 : response.data.data.num180,
        num4 : response.data.data.num240,
        });
      })
      .catch((error) => {
        console.log(error);
      }); 
  }


  render() {
    // 参考：https://alibaba.github.io/BizCharts/
    const { Text } = Guide;
    let data = [
      { action: '1-60天', pv: this.state.num1 },
      { action: '61-120天', pv: this.state.num2 },
      { action: '121-180天', pv: this.state.num3 },
      { action: '181-240天', pv: this.state.num4 },
    ];

    const dv = new DataView().source(data);
    dv.transform({
      type: 'percent',
      field: 'pv',
      dimension: 'action',
      as: 'percent',
    });
    data = dv.rows;

    const cols = {
      percent: {
        nice: false,
      },
    };

    return (
      <div className="chart-funnel">
        <IceContainer>
          <h4 style={styles.title}>猪的年龄分布</h4>
          <Chart
            height={400}
            data={data}
            scale={cols}
            padding={[20, 120, 95]}
            forceFit
          >
            <Tooltip
              showTitle={false}
              itemTpl="<li data-index={index} style=&quot;margin-bottom:4px;&quot;><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}<br/><span style=&quot;padding-left: 16px&quot;>生猪总数：{pv}</span><br/><span style=&quot;padding-left: 16px&quot;>占比：{percent}</span><br/></li>"
            />
            <Coord type="rect" transpose scale={[1, -1]} />
            <Legend />
            {data.map((obj, index) => {
              return (
                <Guide key={index}>
                  <Text
                    top
                    position={{
                      action: obj.action,
                      percent: 'median',
                    }}
                    content={`${parseInt(obj.percent * 100, 10)}%`}
                    style={{
                      fill: '#fff',
                      fontSize: '12',
                      textAlign: 'center',
                      shadowBlur: 2,
                      shadowColor: 'rgba(0, 0, 0, .45)',
                    }}
                  />
                </Guide>
              );
            })}
            <Geom
              type="intervalSymmetric"
              position="action*percent"
              shape="funnel"
              color={[
                'action',
                ['#0050B3', '#1890FF', '#40A9FF', '#69C0FF', '#BAE7FF'],
              ]}
              tooltip={[
                'action*pv*percent',
                (action, pv, percent) => {
                  return {
                    name: action,
                    percent: `${parseInt(percent * 100, 10)}%`,
                    pv,
                  };
                },
              ]}
            >
              <Label
                content={[
                  'action*pv',
                  (action, pv) => {
                    return `${action} ${pv}`;
                  },
                ]}
                offset={35}
                labeLine={{
                  lineWidth: 1,
                  stroke: 'rgba(0, 0, 0, 0.15)',
                }}
              />
            </Geom>
          </Chart>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  title: {
    margin: '0 0 40px',
    fontSize: '18px',
    paddingBottom: '15px',
    fontWeight: 'bold',
    borderBottom: '1px solid #eee',
  },
};
