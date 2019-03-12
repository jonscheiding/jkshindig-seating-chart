import React, { Component } from 'react';

import { SeatingChartColumn } from './SeatingChartColumn';

import { NAMES_COLUMNS } from './Design';
import SEATING_CHART_DATA from './data.json';

export class SeatingChart extends Component {
  render() {
    const columns = [];

    for(let i = 0; i < NAMES_COLUMNS.length; i++) {
      const column = NAMES_COLUMNS[i];
      const letters = column.letters.split('');
      
      columns.push(<SeatingChartColumn col={i} top={column.top} letters={letters} data={SEATING_CHART_DATA} />);
    }

    return (
      <g>{columns}</g>
    );
  }
}
