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
      <linearGradient id={id} {...props} >
        <stop offset="00%" stopColor={COLOR_FOREGROUND_DARK} />
        <stop offset="20%" stopColor={COLOR_FOREGROUND_LIGHT} />
        <stop offset="40%" stopColor={COLOR_FOREGROUND_DARK} />
        <stop offset="60%" stopColor={COLOR_FOREGROUND_LIGHT} />
      </linearGradient>
    );
  }
}