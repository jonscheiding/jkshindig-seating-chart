import React, { Component } from 'react';

import design from './Design';

export class FullPageGradient extends Component {
  render() {
    const { id, origin } = this.props;

    const props = {
      x1: -origin.x,
      y1: -origin.y,
      x2: design.viewbox.width - origin.x,
      y2: design.viewbox.height - origin.y
    };

    const colors = [
      design.colors.foregroundDark,
      design.colors.foregroundLight,
    ];

    return (
      <linearGradient id={id} {...props} gradientUnits="userSpaceOnUse"> 
        {design.gradient.stops.map((stop, i) => 
          <stop key={i} offset={stop} stopColor={colors[i % colors.length]} />
        )}
      </linearGradient>
    );
  }
}
