import React, { Component } from 'react';

import { TITLE_FONT_SIZE } from './Design';

export class Title extends Component {
  renderText(origin, fontSize, ...lines) {
    return (
      <text x={origin.x} y={origin.y} textAnchor="middle" alignmentBaseline="middle" fontFamily='yesteryear' fontSize={fontSize}>
        {lines.map((line, i) => (
          <tspan key={line} x={origin.x} dy={`${i}em`}>{line}</tspan>
        ))}
      </text>
    )
  }

  render() {
    const bigOrigin = {x: 900, y: 750};
    const smallOrigin = {
      x: bigOrigin.x + (TITLE_FONT_SIZE / 3),
      y: bigOrigin.y + (TITLE_FONT_SIZE * 2)
    };

    return (
      <g>
        {this.renderText(bigOrigin, TITLE_FONT_SIZE, 'Jon &', 'Kaleigh')}
        {this.renderText(smallOrigin, TITLE_FONT_SIZE / 2, 'March 29,', '2019')}
      </g>
    )
  }
}