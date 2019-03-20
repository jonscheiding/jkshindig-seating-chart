import React, { Component } from 'react';

import { Border } from './Border';
import { Fonts } from './Fonts';

import design from './Design';
import data from './data.json';
import { TitleTextBuilder } from './TitleTextBuilder';
import { SeatingChartTextBuilder } from './SeatingChartTextBuilder';

const { RENDER_WIDTH, RENDER_UNITS } = process.env;

class App extends Component {
  render() {
    let { width, height } = {};

    if(RENDER_WIDTH !== undefined) {
      const aspect = design.viewbox.width / design.viewbox.height;
      width = `${RENDER_WIDTH}${RENDER_UNITS}`;
      height = `${RENDER_WIDTH / aspect}${RENDER_UNITS}`;
    };

    const titleBuilder = new TitleTextBuilder(design.title);
    const seatingChartBuilder = new SeatingChartTextBuilder(design.chart, data);

    const texts = [
      ...titleBuilder.build(),
      ...seatingChartBuilder.build()
    ];

    const textElements = texts.map(t => t.getTextElement());
    const gradientElements = texts.map(t => t.getGradientElement());

    return (
      <svg width={width} height={height} 
        viewBox={`0 0 ${design.viewbox.width} ${design.viewbox.height}`}>

        <defs>
          <Fonts />
          {gradientElements}
        </defs>

        <rect width="100%" height="100%" fill={design.colors.background} />
        <Border design={design.borderHexagons} colors={design.colors} />
        {textElements}
      </svg>
    );
  }
}

export default App;
