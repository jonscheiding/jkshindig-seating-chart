import React, { Component } from 'react';

import { SeatingChartColumn } from './SeatingChartColumn';

export class SeatingChart extends Component {
  calculateColumnOffset(index, layout) {
    return layout.margin + ((layout.width + layout.spacing) * index);
  }

  render() {
    const { columns, fonts } = this.props.design;
    const { placements, layout } = columns;
    const data = this.props.data;

    const renderedColumns = [];

    for(let i = 0; i < placements.length; i++) {
      const column = placements[i];
      const letters = column.letters.split('');
      const position = { 
        x: this.calculateColumnOffset(i, layout),
        y: column.top
      };
      
      renderedColumns.push(
        <SeatingChartColumn key={i} position={position} layout={layout}
          fonts={fonts} letters={letters} data={data} />
      );
    }

    return (
      <g>{renderedColumns}</g>
    );
  }
}
