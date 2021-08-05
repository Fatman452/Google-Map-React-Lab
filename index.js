import React, { Component } from 'react';
import { render } from 'react-dom';
import Map from './Map';
import './style.css';

const App = () => (
  <div style={{ width: '100%', height: '400px' }}>
    <Map center={{ lat: 18.7009047, lng: -70.1654584 }} zoom={7} />
  </div>
);

render(<App />, document.getElementById('root'));
