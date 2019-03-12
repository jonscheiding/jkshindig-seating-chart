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

const HEXAGON_ANGLES = [];

for(let i = 0; i < 6; i++) {
  const degrees = 60 * i;
  const radians = degrees * Math.PI / 180;
  HEXAGON_ANGLES.push({ degrees, radians });
}

export class BorderHexagon extends Component {
  calculateCenter(row, col) {
    return {
      y: row * SPACING_VERTICAL,
      x: col * SPACING_HORIZONTAL + INITIAL_OFFSET + (ALTERNATING_OFFSET * ((row + 1) % 2))
    };
  }

  calculatePoints(center) {
    const points = [];
    for(const angle of HEXAGON_ANGLES) {
      points.push({
        x: (center.x) + (HEXAGON_RADIUS * Math.cos(angle.radians)),
        y: (center.y) + (HEXAGON_RADIUS * Math.sin(angle.radians))
      });
    }
    return points;
  }

  calculateRotation(row, col) {
    const rotationIndex = (row + (col * 2)) % 6;
    // const rotationIndex = (row + ((col - 1) % 3)) % 6;
    return HEXAGON_ANGLES[rotationIndex];
  }

  calculateGradientOffset(rotation) {
    return {
      x: 0.5 * Math.cos(rotation.radians),
      y: 0.5 * Math.sin(rotation.radians)
    };
  }

  renderGradient(gradientId, rotation) {
    const gradientOffset = this.calculateGradientOffset(rotation);

    return (
      <linearGradient id={gradientId} 
        x1={0.5 - gradientOffset.x} y1={0.5 - gradientOffset.y}
        x2={0.5 + gradientOffset.x} y2={0.5 + gradientOffset.y}>
        <stop offset="0%" stopColor={COLOR_FOREGROUND_LIGHT} />
        <stop offset="100%" stopColor={COLOR_FOREGROUND_DARK} />
      </linearGradient>
    ) 
  }

  renderHexagon(gradientId, points) {
    const pointsProperty = points.map(p => `${p.x},${p.y}`).join(' ');

    return (
      <polygon fill={`url(#${gradientId})`}
        stroke={COLOR_FOREGROUND_OUTLINE} strokeWidth={STROKE_WIDTH} 
        points={pointsProperty} />
    );
  }

  renderLine(startPoint, endPoint, strokeWidth) {
    return (
      <line 
        x1={startPoint.x} y1={startPoint.y} x2={endPoint.x} y2={endPoint.y}
        stroke={COLOR_FOREGROUND_OUTLINE} strokeWidth={strokeWidth} />
    );
  }

  render() {
    const { row, col } = this.props;

    const gradientId = `${row}-${col}`;

    const center = this.calculateCenter(row, col);
    const points = this.calculatePoints(center);    
    const rotation = this.calculateRotation(row, col);

    return (
      <g transform={`rotate(${rotation.degrees} ${center.x} ${center.y})`}>
        {this.renderGradient(gradientId, rotation)}
        {this.renderHexagon(gradientId, points)}
        {this.renderLine(points[1], points[3], STROKE_WIDTH * 0.5)}
        {this.renderLine(points[1], points[4], STROKE_WIDTH * 0.25)}
      </g>
    );
  }
}
