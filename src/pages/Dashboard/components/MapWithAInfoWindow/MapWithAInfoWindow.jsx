import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Map, InfoWindow } from 'react-amap';

// https://elemefe.github.io/react-amap/components/infowindow
export default class MapWithAInfoWindow extends Component {
  state = {
    value: 'THREE PIG'
  }
  render() {
    const position = {
      longitude: 116.6370981932,
      latitude: 39.9280035536
    };

    const html = `<div>
      <p>${this.state.value}</p>
    </div>`;
    
    return (
      <IceContainer style={{height: 400}} >
        <Map plugins={['ToolBar']} center={position} zoom={15}>
          <InfoWindow
            position={position}
            visible={true}
            content={html}
          />
        </Map>
      </IceContainer>
    );
  }
}
