import React from 'react';
import ReactDOMServer from 'react-dom/server';
import parseArgs from 'command-line-args';
import fs from 'fs';
import svg2img from 'svg2img';

import App from '../src/App';

const args = parseArgs([
  { name: 'render-width', alias: 'w', type: Number, defaultValue: '36' },
  { name: 'output-svg', alias: 's', type: String, defaultValue: './data/seating-chart.svg' },
  { name: 'output-png', alias: 'p', type: String, defaultValue: './data/seating-chart.png' },
  { name: 'dpi', alias: 'd', type: Number, defaultValue: 300 }
]);

console.log(`Rendering SVG to ${args['output-svg']} at ${args['render-width']}in wide.`);

const renderedSvg = ReactDOMServer.renderToString(
  <App renderWidth={args['render-width']} renderUnits='in' />
);

fs.writeFileSync(args['output-svg'], renderedSvg);

const pixelsWidth = args['render-width'] * args['dpi'];
const pixelsHeight = pixelsWidth / App.aspectRatio;

console.log(`Rendering PNG to ${args['output-png']} at ${args['dpi']} DPI.`);

svg2img(renderedSvg, { width: pixelsWidth, height: pixelsHeight },
  (error, renderedPng) => {
    if(error) {
      console.error(error);
      return;
    }

    fs.writeFileSync(args['output-png'], renderedPng);
  }
);
