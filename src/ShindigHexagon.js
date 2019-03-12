import React, { Component } from 'react';

import { HEXAGON_RADIUS } from './Layout';
import { COLOR_FOREGROUND_OUTLINE } from './Design';

const SPACING_HORIZONTAL = HEXAGON_RADIUS * 3;
const SPACING_VERTICAL = HEXAGON_RADIUS * Math.sqrt(3) / 2;
const INITIAL_OFFSET = HEXAGON_RADIUS / 3;
const ALTERNATING_OFFSET = HEXAGON_RADIUS * 1.5;
const STROKE_WIDTH = 10;

export class ShindigHexagon extends Component {
  render() {
    const { row, col } = this.props;

    const center = {
      y: row * SPACING_VERTICAL,
      x: col * SPACING_HORIZONTAL + INITIAL_OFFSET + (ALTERNATING_OFFSET * ((row + 1) % 2))
    }

    const points = [];
    for(let angle = 0; angle < 360; angle += 60) {
      const angleRadians = angle * Math.PI / 180;
      points.push({
        x: (center.x) + (HEXAGON_RADIUS * Math.cos(angleRadians)),
        y: (center.y) + (HEXAGON_RADIUS * Math.sin(angleRadians))
      });
    }

    const pointsProperty = points.map(p => `${p.x},${p.y}`).join(' ');

    return (
      <polygon fill="none" 
        stroke={COLOR_FOREGROUND_OUTLINE} stroke-width={STROKE_WIDTH} 
        points={pointsProperty} />
    );
  }
}