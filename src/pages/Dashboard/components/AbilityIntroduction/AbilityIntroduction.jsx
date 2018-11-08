import React, { Component } from 'react';
import { Grid } from '@icedesign/base';

const { Row, Col } = Grid;

const frameworkIcon = require('./images/kezhuisu.png');
const componentIcon = require('./images/zhinengheyue.png');
const apiIcon = require('./images/fangwei.png');

const abilities = [
  {
    icon: frameworkIcon,
    title: '信息可追溯',
    content: '区块链数据不可篡改的特性使得技术服务商、生产厂商可以自证其清，令政府监管更加有迹可循，同时也让消费者的信息来源更加真实可靠。',
    link: '/framework/',
  },
  {
    icon: componentIcon,
    title: '智能合约',
    content: '通过智能合约完成组织间交易自动结算，资金流向明确可查，合同内容由系统保障执行，杜绝单方面反悔带来的争议。',
    link: '/components/',
  },
  {
    icon: apiIcon,
    title: '上链防伪',
    content: '猪肉由出生开始上链，记录关键信息，直到上餐桌全程可查，交易完成后自动销毁条码信息并确认完成，以达到一码一肉一猪。',
    link: '/api/',
  },
];

export default class AbilityIntroduction extends Component {
  renderAblities = () => {
    return abilities.map(({ icon, title, content, link }, idx) => {
      return (
        <Col xxs="24" l="8" style={styles.item} key={idx}>
          <img src={icon} style={{ width: '160px', height: '160px' }} alt="" />
          <div style={{ fontSize: '24px', color: '#333', marginBottom: '6px' }}>
            {title}
          </div>
          <div
            style={{
              width: '182px',
              fontSize: '16px',
              color: '#6D7A82',
              marginBottom: '30px',
              lineHeight: '1.7em',
            }}
          >
            {content}
          </div>
        </Col>
      );
    });
  };
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.title}>区块链猪肉溯源平台</div>
        <div style={styles.subtitle}>&lt; 从小猪的出生、饲养、屠宰到流通的全过程，提供全方位的上链记录。 &gt;</div>
        <Row wrap style={styles.group}>
          {this.renderAblities()}
        </Row>
      </div>
    );
  }
}

const styles = {
  container: {
    background: '#fafafa',
    padding: '70px 70px 140px',
    textAlign: 'center',
  },
  title: {
    color: '#333',
    fontSize: '48px',
    whiteSpace: 'nowrap',
    marginBottom: '10px',
  },
  group: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '40px',
  },
  item: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  },
};
