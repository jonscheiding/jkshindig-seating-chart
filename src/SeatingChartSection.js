import React, { Component } from 'react';

import { TextWithGradient } from './TextWithGradient';

export class SeatingChartSection extends Component {
  translate(point, dx, dy) {
    return { x: point.x + dx, y: point.y + dy };
  }

  render() {
    const { origin, letter, fonts, width, data } = this.props;

    return (
      <g>
        <TextWithGradient id={`${letter}-letter`}
          origin={origin}
          font={fonts.letters.font} size={fonts.letters.size}
          lines={[letter]} />

        <TextWithGradient id={`${letter}-names`}
          origin={this.translate(origin, 0, fonts.letters.size)}
          font={fonts.names.font} size={fonts.names.size} lineSpacing={1.2}
          lines={data.map(row => `${row.Title} ${row.First} ${row.Last}`)} />

        <TextWithGradient id={`${letter}-tables`}
          origin={this.translate(origin, width, fonts.letters.size)}
          font={fonts.names.font} size={fonts.names.size} lineSpacing={1.2} textAnchor='end'
          lines={data.map(row => row.Table)} />
      </g>
    );
  }
}

SeatingChartSection.calculateHeight = function(data, fonts) {
  return fonts.letters.size + (fonts.names.size * 1.2 * data.length);
}

SeatingChartSection.calculateHeightOffset = function(data, fonts) {
  return SeatingChartSection.calculateHeight(data, fonts) + fonts.letters.size;
}
