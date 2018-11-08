import React, { Component } from 'react';
import ModelOverview from './components/ModelOverview';
import TabChart from './components/TabChart';
import CustomPieChart from './components/CustomPieChart';
import NoticeList from './components/NoticeList';

export default class PublicFarm extends Component {
  static displayName = 'PublicFarm';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="public-farm-page">
        <ModelOverview />
        <TabChart />
        <CustomPieChart />
        <NoticeList />
      </div>
    );
  }
}
