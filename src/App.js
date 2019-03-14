import React, { Component } from 'react';

import { Border } from './Border';
import { Title } from './Title';
import { SeatingChart } from './SeatingChart';
import { Fonts } from './Fonts';

import design from './Design';
import data from './data.json';

const RENDER_SCALE = process.env.RENDER_SCALE || process.env.REACT_APP_RENDER_SCALE || 0.25;

class App extends Component {
  render() {
    return (
      <svg width={RENDER_SCALE * design.viewbox.width} height={RENDER_SCALE * design.viewbox.height} 
        viewBox={`0 0 ${design.viewbox.width} ${design.viewbox.height}`}>

        <Fonts />

        <rect width="100%" height="100%" fill={design.colors.background} />
        <Border design={design.borderHexagons} colors={design.colors} />
        <Title design={design.title} />
        <SeatingChart design={design.chart} colors={design.colors} data={data} />
      </svg>
    );
  }
}

export default App;
