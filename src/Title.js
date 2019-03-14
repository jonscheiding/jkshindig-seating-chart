import React, { Component } from 'react';

import { TextWithGradient } from './TextWithGradient';

export class Title extends Component {
  render() {
    const { font, position, parts } = this.props.design;

    const text = [];
    let origin = {x: position.x, y: position.y };

    for(let i = 0; i < parts.length; i++) {
      const { size, offset, lines } = parts[i];

      origin.x += offset;

      text.push(
        <TextWithGradient key={i} id={`title-${i}`} origin={origin}
          alignmentBaseline='middle' textAnchor='middle'
          font={font} size={size} lines={lines} />);

      origin = {x: position.x, y: origin.y + (lines.length * size)}
    }

    return (
      <g>{text}</g>
    )
  }
}
