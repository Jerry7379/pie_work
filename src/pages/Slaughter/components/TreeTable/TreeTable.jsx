import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, Pagination } from '@icedesign/base';
import IceContainer from '@icedesign/container';

const mockData = [
  {
    tradeCode: 1,
    number: '14478780083',
    breed: '香猪',
    type: '整猪',
    weight: 32,
    farmName: '农联农家养殖场',
    children: [
      {
        tradeCode: 11,
        number: '23434242341',
        breed: '香猪',
        type: '猪腿',
        weight: 33,
        farmName: '农联农家养殖场',
      },
      {
        tradeCode: 12,
        number: '23434242342',
        breed: '香猪',
        type: '猪背',
        weight: 33,
        farmName: '农联农家养殖场'
      },
      {
        tradeCode: 13,
        number: '23434242343',
        breed: '香猪',
        type: '猪腹',
        weight: 33,
        farmName: '农联农家养殖场'
      },
      {
        tradeCode: 14,
        number: '23434242344',
        breed: '香猪',
        type: '猪臀',
        weight: 33,
        farmName: '农联农家养殖场'
      },
      {
        tradeCode: 15,
        number: '23434242345',
        breed: '香猪',
        type: '猪肩',
        weight: 33,
        farmName: '农联农家养殖场'
      },
    ],
  },
  {
    tradeCode: 2,
    number: '12413534225',
    breed: '香猪',
    weight: 32,
    farmName: '金玉石农家养殖场',
    children: [],
  },
  {
    tradeCode: 3,
    number: '12353454545',
    breed: '香猪',
    weight: 32,
    farmName: '夏爱频农家养殖场',
    children: [],
  },
  {
    tradeCode: 4,
    number: '43263463433',
    breed: '香猪',
    weight: 32,
    farmName: '新洲农家养殖场',
    children: [],
  },
  {
    tradeCode: 5,
    number: '43263463433',
    breed: '香猪',
    weight: 32,
    farmName: '新洲农家养殖场',
    children: [],
  },
  {
    tradeCode: 6,
    number: '43263463433',
    breed: '香猪',
    weight: 32,
    farmName: '新洲农家养殖场',
    children: [],
  },

];

export default class TreeTable extends Component {
  static displayName = 'TreeTable';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      current: 1,
    };
  }

  handleChange = (current) => {
    this.setState({
      current,
    });
  };

  render() {
    return (
      <IceContainer>
        <Table
          dataSource={mockData}
          primaryKey="tradeCode"
          isTree
          //rowSelection={{ onChange: () => {} }}
        >
          <Table.Column title="编号" dataIndex="number" />
          <Table.Column title="种类" dataIndex="type" />
          <Table.Column title="品种" dataIndex="breed" />
          <Table.Column title="质量" dataIndex="weight" />
          <Table.Column title="养殖场名称" dataIndex="farmName" />
        </Table>
        <Pagination
          style={{ marginTop: '20px', textAlign:  'right' }}
          current={this.state.current}
          onChange={this.handleChange}
        />
      </IceContainer>
    );
  }
}
