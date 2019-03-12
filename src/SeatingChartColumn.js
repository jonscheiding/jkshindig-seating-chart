import React, { Component } from 'react';

import { VIEWBOX_WIDTH } from './Layout';
import { CHART_FONT_SIZE, CHART_LETTER_FONT_SIZE, CHART_COLUMN_SPACING } from './Design';

const SPACING_EDGE = CHART_COLUMN_SPACING * 2;
const SPACING_BETWEEN = CHART_COLUMN_SPACING;
const COLUMN_COUNT = 5;
const COLUMN_WIDTH = (VIEWBOX_WIDTH - (SPACING_EDGE * 2) - (SPACING_BETWEEN * (COLUMN_COUNT - 1))) / COLUMN_COUNT;

export class SeatingChartColumn extends Component {
  renderSection(top, left, height) {
    return (
      <rect y={top} x={left} width={COLUMN_WIDTH} height={height} fill='black' />
    );
  }

  render() {
    const { col, top, letters, data } = this.props;

    const left = SPACING_EDGE + ((COLUMN_WIDTH + SPACING_BETWEEN) * col);

    const sections = [];

    let currentTop = top || 300;

    for(const letter of letters) {
      const rows = data[letter];
      const height = CHART_LETTER_FONT_SIZE + (CHART_FONT_SIZE * 1.2 * rows.length);
      sections.push(this.renderSection(currentTop, left, height));
      currentTop += height + CHART_LETTER_FONT_SIZE;
    }

    return (
      <g>{sections}</g>
    );
  }
}