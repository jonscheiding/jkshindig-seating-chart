import React, { Component } from 'react';

import { ShindigHexagon } from './ShindigHexagon';

import { 
  RENDER_WIDTH, RENDER_HEIGHT,
  VIEWBOX_WIDTH, VIEWBOX_HEIGHT,
  HEXAGONS_PER_ROW
} from './Layout';

import { COLOR_BACKGROUND, HEXAGON_ROWS } from './Design';

class App extends Component {
  renderHexagons() {
    const hexagons = [];
    for(var row of HEXAGON_ROWS) {
      for(var i = 0; i < row.left; i++) {
        hexagons.push(<ShindigHexagon key={`${row.rowNumber}-${i}`} row={row.rowNumber} col={i} />);
      }
      for(var j = HEXAGONS_PER_ROW; j > HEXAGONS_PER_ROW - row.right; j--) {
        hexagons.push(<ShindigHexagon key={`${row.rowNumber}-${j}`} row={row.rowNumber} col={j} />)
      }
    }
    return hexagons;
  }

  render() {
    return (
      <svg width={RENDER_WIDTH} height={RENDER_HEIGHT} 
        viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}>
        <rect width="100%" height="100%" fill={COLOR_BACKGROUND} />
        {this.renderHexagons()}
      </svg>
    );
  }
}

export default App;
