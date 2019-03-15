import React, { Component } from 'react';

import { Border } from './Border';
import { Title } from './Title';
import { SeatingChart } from './SeatingChart';
import { Fonts } from './Fonts';

import design from './Design';
import data from './data.json';

class App extends Component {
  render() {
    const { renderWidth, renderUnits } = this.props;

    let width, height;

    if(renderWidth !== undefined) {
      const aspect = design.viewbox.width / design.viewbox.height;
      width = `${renderWidth}${renderUnits}`;
      height = `${renderWidth / aspect}${renderUnits}`;
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

App.aspectRatio = design.viewbox.width / design.viewbox.height;

export default App;
