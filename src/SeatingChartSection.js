import React, { Component } from 'react';

import { CHART_FONT_SIZE, CHART_LETTER_FONT_SIZE } from './Design';
import { COLUMN_WIDTH } from './SeatingChartColumn';

export class SeatingChartSection extends Component {
  render() {
    const { origin, letter, data } = this.props;

    const height = SeatingChartSection.calculateHeightOffset(data) - CHART_LETTER_FONT_SIZE;

    return (
      <rect x={origin.x} y={origin.y} width={COLUMN_WIDTH} height={height} fill="black" />
    );
  }
}

SeatingChartSection.calculateHeightOffset = function(data) {
  return CHART_LETTER_FONT_SIZE + (CHART_FONT_SIZE * 1.2 * data.length) + CHART_LETTER_FONT_SIZE;
}
