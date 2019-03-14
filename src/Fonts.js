import React from 'react';

import FONTS_DATA from './fonts.json';

export const Fonts = () => {
  const content = Object.keys(FONTS_DATA)
    .map(key =>
      `@font-face {
        font-family: "${key}";
        font-weight: normal;
        src: url("data:font/ttf;base64,${FONTS_DATA[key]})
      }`
    )
    .join('\n');

  return (<style id='fonts'>{content}</style>);
}
