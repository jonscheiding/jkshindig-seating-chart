import React, { Component } from 'react';

import { CHART_FONT_SIZE, CHART_LETTER_FONT_SIZE } from './Design';
import { COLUMN_WIDTH } from './SeatingChartColumn';

export class SeatingChartSection extends Component {
  render() {
    const { origin, letter, data } = this.props;

    const height = SeatingChartSection.calculateHeightOffset(data);

    return (
      <svg x={origin.x} y={origin.y} width={COLUMN_WIDTH} height={height}>
        <text x={0} y={0} alignmentBaseline='hanging' fontFamily='Yesteryear' fontSize={CHART_LETTER_FONT_SIZE}>
          {letter}
        </text>
        <text x={0} y={CHART_LETTER_FONT_SIZE} alignmentBaseline='hanging' fontFamily='Vollkorn' fontSize={CHART_FONT_SIZE}>
          {data.map((row, i) => (
            <tspan x={0} dy='1.2em'>
              {row.Title} {row.First} {row.Last}
            </tspan>
          ))}
        </text>
        <text x={COLUMN_WIDTH} y={CHART_LETTER_FONT_SIZE} alignmentBaseline='hanging' fontFamily='Vollkorn' textAnchor='end' fontSize={CHART_FONT_SIZE}>
          {data.map((row, i) => (
            <tspan x={COLUMN_WIDTH} dy='1.2em'>{row.Table}</tspan>
          ))}
        </text>
      </svg>
    );
  }
}

SeatingChartSection.calculateHeight = function(data) {
  return CHART_LETTER_FONT_SIZE + (CHART_FONT_SIZE * 1.2 * data.length);
}

SeatingChartSection.calculateHeightOffset = function(data) {
  return SeatingChartSection.calculateHeight(data) + CHART_LETTER_FONT_SIZE;
}
