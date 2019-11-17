import React from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import Constants from '../../../constants/constants';

const coordinates = {
  lat: 48.921501,
  lng: 24.709721,
  zoom: 12
};
const position = [coordinates.lat, coordinates.lng];
const Icon = L.icon({
  iconUrl: '../imgs/location-pin.png',
  shadowUrl: '',
  iconSize: [38, 38], // size of the icon
  iconAnchor: [19, 38] // point of the icon which will correspond to marker's location

});

const MapLeaflet = () => {
  return (

    <Map center={position} zoomControl={false} className="map-container" id='mapid' zoom={coordinates.zoom}>
      <TileLayer
        url={Constants.mapUrl + Constants.accessToken}
      />
      <Marker position={position} icon={Icon}>
      </Marker>
    </Map>
  );
};

export default MapLeaflet;
