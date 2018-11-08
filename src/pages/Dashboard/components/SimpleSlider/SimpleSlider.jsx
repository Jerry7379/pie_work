import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Slider } from '@icedesign/base';

const slides = [
  {
    url: require('./images/pig0.jpg'),
    text: 'pig0',
  },
  {
    url: require('./images/pig4.jpg'),
    text: 'pig1',
  },
  {
    url: require('./images/pig2.jpg'),
    text: 'pig2',
  },
  {
    url: require('./images/pig3.jpg'),
    text: 'pig3',
  },
];

export default class SimpleSlider extends Component {
  static displayName = 'SimpleSlider';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <IceContainer>
        <Slider>
          {slides.map((item, index) => (
            <div key={index}>
              <img src={item.url} alt={item.text} style={styles.itemImg} />
            </div>
          ))}
        </Slider>
      </IceContainer>
    );
  }
}

const styles = {
  itemImg: {
    width: '100%',
  },
};
