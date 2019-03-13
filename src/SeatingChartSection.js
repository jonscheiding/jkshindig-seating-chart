import React, { Component } from 'react';

import { FullPageGradient } from './FullPageGradient';

import { CHART_FONT_SIZE, CHART_LETTER_FONT_SIZE } from './Design';
import { COLUMN_WIDTH } from './SeatingChartColumn';

export class SeatingChartSection extends Component {
  render() {
    const { origin, letter, data } = this.props;

    const gradientId = `gradient-${letter}`;

    return (
      <g>
        <FullPageGradient id={gradientId} origin={origin} />
        <text x={origin.x} y={origin.y} alignmentBaseline='hanging' fill={`url(#${gradientId})`} fontFamily='Yesteryear' fontSize={CHART_LETTER_FONT_SIZE}>
          <tspan dy='0.6em'>{letter}</tspan>
        </text>
        <text x={origin.x} y={origin.y + CHART_LETTER_FONT_SIZE} alignmentBaseline='hanging' fill={`url(#${gradientId})`} fontFamily='Vollkorn' fontSize={CHART_FONT_SIZE}>
          {data.map((row, i) => (
            <tspan key={`name-${i}`} x={origin.x} dy='1.2em'>
              {row.Title}&nbsp;{row.First}&nbsp;{row.Last}
            </tspan>
          ))}
        </text>
        <text x={origin.x + COLUMN_WIDTH} y={origin.y + CHART_LETTER_FONT_SIZE} alignmentBaseline='hanging' fill={`url(#${gradientId})`} fontFamily='Vollkorn' textAnchor='end' fontSize={CHART_FONT_SIZE}>
          {data.map((row, i) => (
            <tspan key={`number-${i}`} x={origin.x + COLUMN_WIDTH} dy='1.2em'>{row.Table}</tspan>
          ))}
        </text>
      </g>
    );
  }
}

SeatingChartSection.calculateHeight = function(data) {
  return CHART_LETTER_FONT_SIZE + (CHART_FONT_SIZE * 1.2 * data.length);
}

SeatingChartSection.calculateHeightOffset = function(data) {
  return SeatingChartSection.calculateHeight(data) + CHART_LETTER_FONT_SIZE;
}
