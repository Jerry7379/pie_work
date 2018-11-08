import React, { Component } from 'react';
import { Grid } from '@icedesign/base';
import Card from './Card';
import axios from 'axios';

const { Row, Col } = Grid;

export default class MultiplePieChart extends Component {
  static displayName = 'MultiplePieChart';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
    
  }

  componentDidMount() {
    axios
      .get('/mock/varietyRatio.json')
      .then((response) => {
        //console.log(response.data);
        //场中品种
        //场中变量
        var name = {};
        var y_simple = {};
        var y = {};
        var y_all1 = 0;
        for(var i=0;i<response.data.breedSpot.length;i++){
          name[i] = response.data.breedSpot[i].variety;
          y_simple[i] = response.data.breedSpot[i].count;
          y_all1 = y_all1+y_simple[i];
        }
        for(var o in y_simple){
          y[o] = (y_simple[o]/y_all1)*100; 
        }
        var day = [];
        for(var k in y){
          day.push({"name": name[k],"y": y[k]});
        }
        //历史品种
        //历史变量
        var name_g = {};
        var y_simple_g = {};
        var y_g = {};
        var y_all2 = 0;
        for(var i=0;i<response.data.breedGlobal.length;i++){
          name_g[i] = response.data.breedGlobal[i].variety;
          y_simple_g[i] = response.data.breedGlobal[i].count;
          y_all2 = y_all2+y_simple_g[i];
        }
        for(var o in y_simple_g){
          y_g[o] = (y_simple_g[o]/y_all2)*100; 
        }
        var global = [];
        for(var k in y_g){
          global.push({"name": name_g[k],"y": y_g[k]});
        }


        var spot_all = response.data.genderSpot[0].male + response.data.genderSpot[0].female;
        var global_all = response.data.genderGlobal[0].male + response.data.genderGlobal[0].female;
        var spot_male = response.data.genderSpot[0].male/spot_all*100;
        var spot_female = response.data.genderSpot[0].female/spot_all*100;
        var global_male = response.data.genderGlobal[0].male/global_all*100;
        var global_female = response.data.genderGlobal[0].female/global_all*100;
        this.setState({
          day: day,
          global: global,
          spot_male: spot_male,
          spot_female: spot_female,
          global_male: global_male,
          global_female: global_female,
        });
      })
      .catch((error) => {
        console.log(error);
      }); 
  }

  render() {
    const options = [
      {
        value: 'day',
        label: '场中数据',
      },
      {
        value: 'yesterday',
        label: '历史数据',
      },
    ];
    const pieChartData1 = {
      day : this.state.day,
      yesterday :this.state.global
    };

    const pieChartData2 = {
      day: [
      {
        name: '雄',
        y: this.state.spot_male,
        sliced: true,
        selected: true,
      },
      {
        name: '雌',
        y: this.state.spot_female,
      }],
      yesterday: [
      {
        name: '雄',
        y: this.state.global_male,
        sliced: true,
        selected: true,
      },
      {
        name: '雌',
        y: this.state.global_female,
      },
    ]};

    return (
      <Row wrap gutter="20">
        <Col l="12">
          <Card title="品种占比" options={options} data={pieChartData1} ></Card>
        </Col>
        <Col l="12">
          <Card title="雌雄占比" options={options} data={pieChartData2}> </Card>
        </Col>
      </Row>
    );
  }
}
