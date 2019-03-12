import React, { Component } from 'react';

import { SeatingChartSection } from './SeatingChartSection';

import { VIEWBOX_WIDTH } from './Layout';
import { CHART_COLUMN_SPACING } from './Design';

const SPACING_EDGE = CHART_COLUMN_SPACING;
const SPACING_BETWEEN = CHART_COLUMN_SPACING;
const COLUMN_COUNT = 5;
export const COLUMN_WIDTH = (VIEWBOX_WIDTH - (SPACING_EDGE * 2) - (SPACING_BETWEEN * (COLUMN_COUNT - 1))) / COLUMN_COUNT;

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
    let currentTop = top;

    for(const letter of letters) {
      const origin = {x: left, y: currentTop}
      const rows = data[letter];
      sections.push(<SeatingChartSection origin={origin} letter={letter} data={rows} />);
      currentTop += SeatingChartSection.calculateHeightOffset(rows);
    }

    return (
      <g>{sections}</g>
    );
  }
}