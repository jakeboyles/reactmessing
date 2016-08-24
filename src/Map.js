import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import './index.css';

class SimpleExample extends React.Component {

  constructor() {
    super();
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13,
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    const position2 = [this.state.lat - 0.01, this.state.lng];
    const position3 = [this.state.lat + 0.01, this.state.lng];
    const position4 = [this.state.lat, this.state.lng - 0.01];
    const position5 = [this.state.lat, this.state.lng + 0.01];
    const array = [position, position2, position3, position4, position5]
    return (
      <div>
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {array.map((pos, index) =>
          <Marker key={pos} position={pos}>
	        <Popup>
	          <span>{index + 1}</span>
	        </Popup>
	      </Marker>
        )}
      </Map>
      </div>
    );
  }
}

export default SimpleExample;
