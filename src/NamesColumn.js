import React, { Component } from 'react';

import { VIEWBOX_WIDTH } from './Layout';

const SPACING_EDGE = 150;
const SPACING_BETWEEN = 100;
const COLUMN_COUNT = 5;
const COLUMN_WIDTH = (VIEWBOX_WIDTH - (SPACING_EDGE * 2) - (SPACING_BETWEEN * (COLUMN_COUNT - 1))) / COLUMN_COUNT;

export class NamesColumn extends Component {
  renderSection(top, left, count) {
    const height = 50 + (30 * count);

    return (
      <rect y={top} x={left} width={COLUMN_WIDTH} height={height} fill='black' />
    );
  }

  render() {
    const { col, top, dataByLetter } = this.props;

    const left = SPACING_EDGE + ((COLUMN_WIDTH + SPACING_BETWEEN) * col);

    const sections = [];

    let currentTop = top || 300;

    for(const letter of dataByLetter) {
      sections.push(this.renderSection(currentTop, left, letter.data.length));
      currentTop += 50 + (30 * letter.data.length) + 50;
    }

    return (
      <g>{sections}</g>
    );
  }
}