import React, { Component } from 'react';

import { TITLE_FONT_SIZE } from './Design';
import { FullPageGradient } from './FullPageGradient';

export class Title extends Component {
  renderText(key, origin, fontSize, ...lines) {
    const gradientId = `gradient-${key}`;

    return [
      <FullPageGradient key={gradientId} id={gradientId} origin={origin} />,
      <text key={`text-${key}`} x={origin.x} y={origin.y} fill={`url(#${gradientId})`} textAnchor='middle' alignmentBaseline='middle' fontFamily='yesteryear' fontSize={fontSize}>
        {lines.map((line, i) => (
          <tspan key={line} x={origin.x} dy={`${i}em`}>{line}</tspan>
        ))}
      </text>
    ]
  }

  render() {
    const bigOrigin = {x: 880, y: 725};
    const smallOrigin = {
      x: bigOrigin.x + (TITLE_FONT_SIZE / 3),
      y: bigOrigin.y + (TITLE_FONT_SIZE * 2)
    };

    return (
      <g>
        {this.renderText('title-big', bigOrigin, TITLE_FONT_SIZE, 'Jon &', 'Kaleigh')}
        {this.renderText('title-small', smallOrigin, TITLE_FONT_SIZE / 2, 'March 29,', '2019')}
      </g>
    )
  }
}