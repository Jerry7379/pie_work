import React, { Component } from 'react';
import { Chart, Axis, Geom, Tooltip } from 'bizcharts';

export default class BasicLine extends Component {
  static displayName = 'BasicLine';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // 参考：https://alibaba.github.io/BizCharts/
    // 数据源
    const data = [
      { date: '2011', value: 30 },
      { date: '2012', value: 40 },
      { date: '2013', value: 35 },
      { date: '2014', value: 50 },
      { date: '2015', value: 49 },
      { date: '2016', value: 60 },
      { date: '2017', value: 70 },
      { date: '2018', value: 90 },
      { date: '2019', value: 100 },
    ];

    const cols = {
      value: { min: 0 },
      date: { range: [0, 1] },
    };

    return (
      <div className="basic-line">
        <Chart
          height={300}
          data={data}
          scale={cols}
          forceFit
          padding={[40, 35, 40, 35]}
        >
          <Axis name="date" />
          <Axis name="value" />
          <Tooltip crosshairs={{ type: 'y' }} />
          <Geom type="line" position="date*value" size={2} />
          <Geom
            type="point"
            position="date*value"
            size={4}
            shape="circle"
            style={styles.point}
          />
        </Chart>
      </div>
    );
  }
}

const styles = {
  point: {
    stroke: '#fff',
    lineWidth: 1,
  },
};
