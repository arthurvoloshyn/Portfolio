import React from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';

import Constants from '../../../constants/constants';
import { IMGS } from '../../../constants/imgs';

const coordinates = {
  lat: 48.921501,
  lng: 24.709721,
  zoom: 12
};
const { lat, lng, zoom } = coordinates;
const position = [lat, lng];
const Icon = L.icon({
  iconUrl: IMGS.location,
  shadowUrl: '',
  iconSize: [38, 38], // size of the icon
  iconAnchor: [19, 38] // point of the icon which will correspond to marker's location
});
const { mapUrl, accessToken } = Constants;
const URL = `${mapUrl}${accessToken}`;

const MapLeaflet = () => (
  <Map center={position} zoomControl={false} className="map-container" id="mapid" zoom={zoom}>
    <TileLayer url={URL} />
    <Marker position={position} icon={Icon} />
  </Map>
);

export default MapLeaflet;
