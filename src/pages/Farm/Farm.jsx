import React, { Component } from 'react';
import RealTimeData from './components/RealTimeData';
import MultiplePieChart from './components/MultiplePieChart';
import ChartFunnel from './components/ChartFunnel';
import ChartPoint from './components/ChartPoint';

export default class Farm extends Component {
  static displayName = 'Farm';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="farm-page">
        <RealTimeData />
        <MultiplePieChart />
        <ChartFunnel />
        <ChartPoint />
      </div>
    );
  }
}
