import React, { Component } from 'react';

import { ShindigHexagons } from './ShindigHexagons';

import { 
  RENDER_WIDTH, RENDER_HEIGHT,
  VIEWBOX_WIDTH, VIEWBOX_HEIGHT
} from './Layout';

import { COLOR_BACKGROUND } from './Design';

class App extends Component {
  render() {
    return (
      <svg width={RENDER_WIDTH} height={RENDER_HEIGHT} 
        viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}>
        <rect width="100%" height="100%" fill={COLOR_BACKGROUND} />
        <ShindigHexagons />
      </svg>
    );
  }
}

export default App;
