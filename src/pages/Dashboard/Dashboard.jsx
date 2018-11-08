import React, { Component } from 'react';
import SimpleSlider from './components/SimpleSlider';
import MapWithAInfoWindow from './components/MapWithAInfoWindow';
import Footer from './components/Footer';
import AbilityIntroduction from './components/AbilityIntroduction';

export default class Dashboard extends Component {
  static displayName = 'Dashboard';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <SimpleSlider />
        <AbilityIntroduction />
        <MapWithAInfoWindow />  
        <Footer />   
      </div>
    );
  }
}
