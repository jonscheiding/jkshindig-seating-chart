import React, { Component } from 'react';

import { 
  COLOR_BACKGROUND, 
  SIZE_RENDER_WIDTH, SIZE_RENDER_HEIGHT,
  SIZE_VIEWBOX_WIDTH, SIZE_VIEWBOX_HEIGHT
} from './constants';

class App extends Component {
  render() {
    return (
      <svg width={SIZE_RENDER_WIDTH} height={SIZE_RENDER_HEIGHT} 
        viewBox={`0 0 ${SIZE_VIEWBOX_WIDTH} ${SIZE_VIEWBOX_HEIGHT}`}>
        <rect width="100%" height="100%" fill={COLOR_BACKGROUND} />
      </svg>
    );
  }
}

export default App;
