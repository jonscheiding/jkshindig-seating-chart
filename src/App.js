import React, { Component } from 'react';

import { Border } from './Border';
import { Title } from './Title';
import { SeatingChart } from './SeatingChart';
import { Fonts } from './Fonts';

import design from './Design';
import data from './data.json';

const { RENDER_WIDTH, RENDER_UNITS } = process.env;

class App extends Component {
  render() {
    let { width, height } = {};

    if(RENDER_WIDTH !== undefined) {
      const aspect = design.viewbox.width / design.viewbox.height;
      width = `${RENDER_WIDTH}${RENDER_UNITS}`;
      height = `${RENDER_WIDTH / aspect}${RENDER_UNITS}`;
    };

    return (
      <svg width={width} height={height} 
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
