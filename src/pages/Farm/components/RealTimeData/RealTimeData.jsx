import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@icedesign/base';
import SplineChart from './SplineChart';
import axios from 'axios';

const { Row, Col } = Grid;

export default class RealTimeData extends Component {
  static displayName = 'RealTimeData';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      alldata: {},
      currentWeek:{},
      totalCount : 0
    };
    console.log(this)
  }
  
  componentWillMount() { 
    axios
      .get('/mock/farmdata.json')
      .then((response) => {
        this.setState({
          totalCount : response.data.alldata.totalCount,
          alldata: response.data.alldata,
          currentWeek: response.data.currentWeek
        });
      })
      .catch((error) => {
        console.log(error);
      }); 
  }


  render() {
   
    const totalData = [
      {
        label: '养殖场中猪总数',
        value: this.state.alldata.totalCount,
      },
      {
        label: '已出栏的猪',
        value: this.state.alldata.outBarCount,
      },
      {
        label: '平均出栏体重',

        value: this.state.alldata.outBarAvgWeight+'kg',
      },
      {
        label: 'A级猪占比',
        value: '689',
      },
    ];

    const todayData = [
      {
        label: '本周出生',
        value: this.state.currentWeek.totalCount,
        img: require('./images/count.png')
      },
      {
        label: '本周出栏',
        value: this.state.currentWeek.outBarCount,
        img: require('./images/repo.png')
      },
      {
        label: '平均出栏体重',
        value: this.state.currentWeek.outBarAvgWeight+'kg',
        img: require('./images/user.png')
      },
      {
        label: '出栏A级猪',
        value: '55',
        img: require('./images/builder.png')
      },
    ];

    return (
      <Row gutter="20">
        <Col l="12">
          <IceContainer>
            <h4 style={styles.cardTitle}>养殖场中猪的数量</h4>
            <SplineChart />
          </IceContainer>
        </Col>
        <Col l="12">
          <IceContainer>
            <h4 style={styles.cardTitle}>所有数据</h4>
            <Row wrap gutter="10">
              {totalData.map((item, index) => {
                return (
                  <Col key={index} style={{ background: 'white' }}>
                    <div style={styles.totalCard}>
                      <div style={styles.label}>{item.label}</div>
                      <div style={styles.value}>{item.value}</div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </IceContainer>
          <IceContainer>
            <h4 style={styles.cardTitle}>本周数据</h4>
            <Row wrap gutter="10">
              {todayData.map((item, index) => {
                return (
                  <Col key={index} style={{ background: 'white' }}>
                    <div style={styles.todayCard}>
                      <img src={item.img} alt="" style={styles.todayCardIcon} />
                      <div>
                        <div style={styles.label}>{item.label}</div>
                        <div style={styles.value}>{item.value}</div>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </IceContainer>
        </Col>
      </Row>
    );
  }
}

const styles = {
  cardTitle: {
    margin: '0 0 20px',
    fontSize: '18px',
    paddingBottom: '15px',
    fontWeight: 'bold',
    borderBottom: '1px solid #eee',
  },
  totalCard: {
    maxWidth: '160px',
    padding: '10px',
    borderRadius: '4px',
    background: 'rgba(240,130,76,8)',
    color: '#fff',
  },
  todayCard: {
    display: 'flex',
    alignItems: 'center',
  },
  todayCardIcon: {
    width: '36px',
    height: '36px',
    marginRight: '8px',
  },
  label: {
    height: '14px',
    lineHeight: '14px',
    marginBottom: '8px',
  },
  value: {
    height: '28px',
    lineHeight: '28px',
    fontSize: '28px',
    fontWeight: '500',
  },
};
