import React, { Component } from 'react';

import { VIEWBOX_WIDTH, VIEWBOX_HEIGHT } from './Layout';
import { COLOR_FOREGROUND_DARK, COLOR_FOREGROUND_LIGHT } from './Design';

export class FullPageGradient extends Component {
  render() {
    const { id, origin } = this.props;

    const props = {
      x1: -origin.x,
      y1: -origin.y,
      x2: VIEWBOX_WIDTH - origin.x,
      y2: VIEWBOX_HEIGHT - origin.y
    };

    return (
      <linearGradient id={id} {...props} gradientUnits='userSpaceOnUse'>
        <stop offset="10%" stopColor={COLOR_FOREGROUND_DARK} />
        <stop offset="40%" stopColor={COLOR_FOREGROUND_LIGHT} />
        <stop offset="70%" stopColor={COLOR_FOREGROUND_DARK} />
        <stop offset="90%" stopColor={COLOR_FOREGROUND_LIGHT} />
        <stop offset="100%" stopColor={COLOR_FOREGROUND_DARK} />
      </linearGradient>
    );
  }
}