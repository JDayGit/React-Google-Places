import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

export class Map extends Component {
  state = {
    center: null,
    marker: null, 
    directions: null
  }; 

  componentWillMount(){
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        center: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        },
        marker: {
          position: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        }
      });
    });
  }

  renderYouAreHereMarker(){
    return (
      <Marker
      position={this.state.center}
      />
    )
  }

  render(){
    if (!this.state.center){
      return(
        <div>Loading...</div>
      )
    }
  }

  render() {
    const GoogleMapExample = withGoogleMap(props => (
        <GoogleMap
          defaultCenter = { { lat: 33.4255, lng: -111.9400 } }
          defaultZoom = { 14 }
        >
        {this.renderYouAreHereMarker()}
        <Marker
        position={{lat: 33.4255, lng: -111.9400}}
        />
        </GoogleMap>
     ));
    return (
        <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: `300px`, width: '100%', borderBottom: '1px dotted #ccc' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
    );
  }
}

export default Map;