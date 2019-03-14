import React, { Component } from 'react';

import { SeatingChartSection } from './SeatingChartSection';

export class SeatingChartColumn extends Component {
  render() {
    const { position, letters, fonts, layout, data } = this.props;

    const sections = [];
    let currentTop = position.y;

    for(const letter of letters) {
      const origin = {x: position.x, y: currentTop}
      const rows = data[letter];

      sections.push(<SeatingChartSection 
        key={letter} origin={origin} 
        letter={letter} fonts={fonts} width={layout.width}
        data={rows} />);

      currentTop += SeatingChartSection.calculateHeightOffset(rows, fonts);
    }

    return (
      <g>{sections}</g>
    );
  }
}