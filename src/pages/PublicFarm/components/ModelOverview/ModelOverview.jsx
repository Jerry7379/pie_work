import React, { Component } from 'react';
import { Grid } from '@icedesign/base';
import FoundationSymbol from 'foundation-symbol';

const { Row, Col } = Grid;

const mockData = [
  {
    symbolBgColor: '#6ccac9',
    symbol: 'clock',
    count: '120天',
    desc: '平均饲养时间',
  },
  {
    symbolBgColor: '#ed6c5c',
    symbol: 'customize',
    count: '130.2kg',
    desc: '平均出栏体重',
  },
  {
    symbolBgColor: '#f4d32f',
    symbol: 'content',
    count: '大黑猪',
    desc: '饲养品种冠军',
  },
  {
    symbolBgColor: '#6ac8f3',
    symbol: 'yonghu',
    count: '242',
    desc: '入驻养殖场数',
  },
];

export default class ModelOverview extends Component {
  static displayName = 'ModelOverview';

  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <Row gutter={20} wrap>
        {mockData.map((item, index) => {
          return (
            <Col xxs="24" xs="12" l="6" key={index}>
              <div style={styles.box}>
                <div
                  style={{
                    ...styles.symbol,
                    background: `${item.symbolBgColor}`,
                  }}
                >
                  <FoundationSymbol size="xl" type={item.symbol} />
                </div>
                <div style={styles.value}>
                  <div style={styles.count}>{item.count}</div>
                  <div style={styles.desc}>{item.desc}</div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    );
  }
}

const styles = {
  box: {
    display: 'flex',
    height: '100px',
    background: '#fff',
    borderRadius: '4px',
    marginBottom: '20px',
  },
  symbol: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    color: '#fff',
  },
  value: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    color: '#c6cad6',
  },
  count: {
    fontSize: '36px',
    marginBottom: '2px',
  },
  desc: {
    fontSize: '13px',
  },
};
