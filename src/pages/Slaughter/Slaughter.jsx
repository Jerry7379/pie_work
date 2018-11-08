import React, { Component } from 'react';
import OverviewSatesChart from './components/OverviewSatesChart';
import TreeTable from './components/TreeTable';
import SimpleStep from './components/SimpleStep';
import ChartPie from './components/ChartPie';

export default class Slaughter extends Component {
  static displayName = 'Slaughter';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="slaughter-page">
        <OverviewSatesChart />
        <SimpleStep />
        <ChartPie />
        <TreeTable />
      </div>
    );
  }
}
