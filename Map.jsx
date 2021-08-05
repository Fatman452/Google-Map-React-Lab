/* global google */
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const apiIsLoaded = (map, maps, center) => {
  const circle = new maps.Polygon({
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 1,
    fillColor: '#FF0000',
    fillOpacity: 0.3,
    map,
    path: [
      { lat: 17.7009047, lng: -71.8 },
      { lat: 17.7009047, lng: -68.327 },
      { lat: 20, lng: -68.327 },
      { lat: 20, lng:-71.8 }
    ]
  });
};

const googleAPIKey = '';

const MapExample = ({ center, zoom }) => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: googleAPIKey }}
      yesIWantToUseGoogleMapApiInternals={true}
      defaultZoom={zoom}
      defaultCenter={center}
      onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, center)}
    />
  );
};

export default MapExample;
