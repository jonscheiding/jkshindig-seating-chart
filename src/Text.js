import React from 'react';

import { FullPageGradient } from './FullPageGradient';
import { TextWrapper } from './TextWrapper';

export class Text {
  constructor(id, lines, origin, font, layout = {}) {
    this.id = id;
    this.lines = lines;
    this.origin = origin;
    this.font = font;
    this.layout = layout;
  }

  getGradientId() {
    return `gradient-${this.id}`;
  }

  getTextElement() {
    return (
      <TextWrapper key={this.id} gradientId={this.getGradientId()}
        origin={this.origin} lines={this.lines} 
        font={this.font} 
        alignmentBaseline={this.layout.alignmentBaseline} 
        textAnchor={this.layout.textAnchor} 
        lineSpacing={this.layout.lineSpacing} />
    );
  }

  getGradientElement() {
    return (
      <FullPageGradient 
        key={this.getGradientId()} id={this.getGradientId()} 
        origin={this.origin} />
    );
  }
}
