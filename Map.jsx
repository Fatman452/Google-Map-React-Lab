/* global google */
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
const provincias = {
  dajabon: [
    { lat: 18.5, lng: -69.5 },
    { lat: 18.5, lng: -69.327 },
    { lat: 18.9, lng: -69.327 },
    { lat: 18.9, lng: -69.5 }
  ],
  'santo domingo': [
    { lat: 18.5, lng: -70.5 },
    { lat: 18.5, lng: -71.327 },
    { lat: 18.9, lng: -71.327 },
    { lat: 18.9, lng: -70.5 }
  ]
};
const apiIsLoaded = (map, maps, center) => {
  const info = new maps.InfoWindow();

  for (let prov of Object.values(provincias)) {
    const province_shape = new maps.Polygon({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.3,
      map,
      path: prov
    });
    province_shape.addListener('click', event => {
      console.log(province_shape);
      info.setContent('Content');
      info.setPosition(event.latLng);
      info.open(map);
    });
  }
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
