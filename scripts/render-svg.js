import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'fs';
import minimist from 'minimist';

import App from '../src/App';

const args = minimist(process.argv.slice(2));

const rendered = ReactDOMServer.renderToString(
    <App 
        renderWidth={args['render-width']}
        renderUnits={args['render-units']} 
    />);

const outputDir = args['output-dir'] || './data';

fs.writeFileSync(outputDir + '/seating-chart.svg', rendered);
