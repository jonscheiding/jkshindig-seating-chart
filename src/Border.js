import React, { Component } from 'react';

import { BorderHexagon, ANGLES } from './BorderHexagon';

export class Border extends Component {
  calculateCenter(placement, spacing, offset) {
    const calculatedOffset = offset.initial + (offset.alternating * ((placement.row + 1) % 2));

    return {
      y: placement.row * spacing.vertical,
      x: placement.col * spacing.horizontal + calculatedOffset
    };
  }

  calculateRotation(placement) {
    return (placement.row + (placement.col * 2)) % 6;
  }

  calculateGradientOffset(angle) {
    return {
      x: 0.5 * Math.cos(angle.radians),
      y: 0.5 * Math.sin(angle.radians)
    };
  }

  calculateGradientId(rotation) {
    return `gradient-${rotation}`;
  }

  renderGradient(rotation, angle, colors) {
    const gradientOffset = this.calculateGradientOffset(angle);
    const id = this.calculateGradientId(rotation);

    return (
      <linearGradient key={id} id={id} 
        x1={0.5 - gradientOffset.x} y1={0.5 - gradientOffset.y}
        x2={0.5 + gradientOffset.x} y2={0.5 + gradientOffset.y}>
        <stop offset="0%" stopColor={colors.foregroundLight} />
        <stop offset="100%" stopColor={colors.foregroundDark} />
      </linearGradient>
    ) 
  }

  render() {
    const { placements, radius, strokeWidth } = this.props.design;
    const colors = this.props.colors;

    const spacing = { 
      horizontal: radius * 3,
      vertical: radius * Math.sqrt(3) / 2
    };

    const offset = {
      initial: radius / 3,
      alternating: radius * 1.5
    };

    const gradients = ANGLES.map((angle, index) => 
      this.renderGradient(index, angle, colors));

    const hexagons = [];
    for(var placement of placements) {
      const center = this.calculateCenter(placement, spacing, offset);
      const rotation = this.calculateRotation(placement);

      const { row, col } = placement;

      hexagons.push(<BorderHexagon key={`${row}-${col}`} 
        radius={radius} strokeColor={colors.foregroundOutline} strokeWidth={strokeWidth}
        center={center} rotation={rotation}
        gradient={this.calculateGradientId(rotation)} />);
    }

    return (
      <g>{gradients} {hexagons}</g>
    );
  }
}
