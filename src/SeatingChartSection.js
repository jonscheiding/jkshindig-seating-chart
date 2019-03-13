import React, { Component } from 'react';

import { FullPageGradient } from './FullPageGradient';

import { CHART_FONT_SIZE, CHART_LETTER_FONT_SIZE } from './Design';
import { COLUMN_WIDTH } from './SeatingChartColumn';

export class SeatingChartSection extends Component {
  render() {
    const { origin, letter, data } = this.props;

    const height = SeatingChartSection.calculateHeightOffset(data);
    const gradientId = `gradient-${letter}`;

    return (
      <g>
        <FullPageGradient id={gradientId} origin={origin} />
        <svg x={origin.x} y={origin.y} width={COLUMN_WIDTH} height={height}>
          <text x={0} y={0} alignmentBaseline='hanging' fill={`url(#${gradientId})`} fontFamily='Yesteryear' fontSize={CHART_LETTER_FONT_SIZE}>
            {letter}
          </text>
          <text x={0} y={CHART_LETTER_FONT_SIZE} alignmentBaseline='hanging' fill={`url(#${gradientId})`} fontFamily='Vollkorn' fontSize={CHART_FONT_SIZE}>
            {data.map((row, i) => (
              <tspan key={`name-${i}`} x={0} dy='1.2em'>
                {row.Title} {row.First} {row.Last}
              </tspan>
            ))}
          </text>
          <text x={COLUMN_WIDTH} y={CHART_LETTER_FONT_SIZE} alignmentBaseline='hanging' fill={`url(#${gradientId})`} fontFamily='Vollkorn' textAnchor='end' fontSize={CHART_FONT_SIZE}>
            {data.map((row, i) => (
              <tspan key={`number-${i}`} x={COLUMN_WIDTH} dy='1.2em'>{row.Table}</tspan>
            ))}
          </text>
        </svg>
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
