import React, { Component } from 'react';

import { BorderHexagon } from './BorderHexagon';

import { HEXAGONS_PER_ROW } from './Layout';
import { HEXAGON_ROWS } from './Design';

export class Border extends Component {
  render() {
    const hexagons = [];
    for(var row of HEXAGON_ROWS) {
      for(var i = 0; i < row.left; i++) {
        hexagons.push(<BorderHexagon key={`${row.rowNumber}-${i}`} row={row.rowNumber} col={i} />);
      }
      for(var j = HEXAGONS_PER_ROW; j > HEXAGONS_PER_ROW - row.right; j--) {
        hexagons.push(<BorderHexagon key={`${row.rowNumber}-${j}`} row={row.rowNumber} col={j} />)
      }
    }

    return (
      <g>{hexagons}</g>
    );
  }
}