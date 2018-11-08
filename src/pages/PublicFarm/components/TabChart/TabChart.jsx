import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Tab } from '@icedesign/base';
import Pig from './pig';
import Corn from './corn';

const TabPane = Tab.TabPane;

export default class TabChart extends Component {
  static displayName = 'TabChart';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (key) => {
    console.log('change', key);
  };

  render() {
    return (
      <div className="tab-chart" style={styles.container}>
        <IceContainer style={styles.card}>
          <Tab onChange={this.handleChange}>
            <TabPane key="1" tab="生猪走势">
              <Pig />
            </TabPane>
            <TabPane key="2" tab="玉米走势(14%水分)">
              <Corn />
            </TabPane>
            <TabPane key="3" tab="豆粕走势(43%蛋白)">
              <Corn />
            </TabPane>
          </Tab>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  container: {
    marginBottom: '20px',
  },
  card: {
    padding: '0 20px',
  },
};
