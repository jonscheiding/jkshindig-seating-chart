import React, { Component } from 'react';

export const ANGLES = [];

for(let i = 0; i < 6; i++) {
  const degrees = 60 * i;
  const radians = degrees * Math.PI / 180;
  ANGLES.push({ degrees, radians });
}

export class BorderHexagon extends Component {
  calculatePoints(center, radius) {
    const points = [];
    for(const angle of ANGLES) {
      points.push({
        x: (center.x) + (radius * Math.cos(angle.radians)),
        y: (center.y) + (radius * Math.sin(angle.radians))
      });
    }
    return points;
  }

  calculateGradientOffset(rotation) {
    return {
      x: 0.5 * Math.cos(rotation.radians),
      y: 0.5 * Math.sin(rotation.radians)
    };
  }

  renderHexagon(gradient, points, strokeColor, strokeWidth) {
    const pointsProperty = points.map(p => `${p.x},${p.y}`).join(' ');

    return (
      <polygon fill={`url(#${gradient})`}
        stroke={strokeColor} strokeWidth={strokeWidth} 
        points={pointsProperty} />
    );
  }

  renderLine(startPoint, endPoint, strokeColor, strokeWidth) {
    return (
      <line 
        x1={startPoint.x} y1={startPoint.y} x2={endPoint.x} y2={endPoint.y}
        stroke={strokeColor} strokeWidth={strokeWidth} />
    );
  }

  render() {
    const { center, radius, rotation, gradient, strokeColor, strokeWidth } = this.props;

    const points = this.calculatePoints(center, radius);    
    const rotationAngle = ANGLES[rotation];

    return (
      <g transform={`rotate(${rotationAngle.degrees} ${center.x} ${center.y})`}>
        {this.renderHexagon(gradient, points, strokeColor, strokeWidth)}
        {this.renderLine(points[1], points[3], strokeColor, strokeWidth * 0.5)}
        {this.renderLine(points[1], points[4], strokeColor, strokeWidth * 0.25)}
      </g>
    );
  }
}
