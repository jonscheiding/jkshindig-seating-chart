import React, { Component } from 'react';

import { HEXAGON_RADIUS } from './Layout';
import { 
  COLOR_FOREGROUND_LIGHT,
  COLOR_FOREGROUND_DARK,
  COLOR_FOREGROUND_OUTLINE 
} from './Design';

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
    
    const id = `${row}-${col}`;
    
    const rotation = (row + (col % 3)) * 60;
    const rotationRadians = rotation * Math.PI / 180;

    const gradientOffset = {
      x: 0.5 * Math.cos(rotationRadians),
      y: 0.5 * Math.sin(rotationRadians)
    };

    return (
      <g 
      transform={`rotate(${rotation} ${center.x} ${center.y})`}
      >
        <linearGradient id={id} 
          x1={0.5 - gradientOffset.x} y1={0.5 - gradientOffset.y}
          x2={0.5 + gradientOffset.x} y2={0.5 + gradientOffset.y}
          >
          <stop offset="0%" stopColor={COLOR_FOREGROUND_LIGHT} />
          <stop offset="100%" stopColor={COLOR_FOREGROUND_DARK} />
        </linearGradient>
        <polygon fill={`url(#${id})`}
          stroke={COLOR_FOREGROUND_OUTLINE} strokeWidth={STROKE_WIDTH} 
          points={pointsProperty} />
        <line x1={points[1].x} y1={points[1].y} x2={points[4].x} y2={points[4].y}
          stroke={COLOR_FOREGROUND_OUTLINE} strokeWidth={STROKE_WIDTH * 0.25} />
        <line x1={points[1].x} y1={points[1].y} x2={points[3].x} y2={points[3].y}
          stroke={COLOR_FOREGROUND_OUTLINE} strokeWidth={STROKE_WIDTH * 0.5} />
      </g>
    );
  }
}