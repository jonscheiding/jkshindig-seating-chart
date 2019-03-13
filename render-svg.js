import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'fs';

import App from './src/App';

const rendered = ReactDOMServer.renderToString(<App />);

fs.writeFileSync('./seating-chart.svg', rendered);
