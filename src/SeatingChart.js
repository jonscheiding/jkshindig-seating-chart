import React, { Component } from 'react';

import { SeatingChartColumn } from './SeatingChartColumn';

import { NAMES_COLUMNS } from './Design';
import DATA from './data.json';

const DATA_BY_LETTER = {};

for(const row of DATA) {
  const letter = row.LastName[0];
  if(!DATA_BY_LETTER[letter]) {
    DATA_BY_LETTER[letter] = [];
  }

  DATA_BY_LETTER[letter].push(row);
}

export class SeatingChart extends Component {
  render() {
    const columns = [];

    for(let i = 0; i < NAMES_COLUMNS.length; i++) {
      const column = NAMES_COLUMNS[i];
      const letters = column.letters.split('');
      const dataByLetter = [];

      for(const letter of letters) {
        dataByLetter.push({
          letter: letter,
          data: DATA_BY_LETTER[letter] || []
        });
      }
      
      columns.push(<SeatingChartColumn col={i} top={column.top} dataByLetter={dataByLetter} />);
    }

    return (
      <g>{columns}</g>
    );
  }
}
