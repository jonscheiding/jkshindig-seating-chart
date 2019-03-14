import React from 'react';

import { FullPageGradient } from './FullPageGradient';

export const TextWithGradient = ({id, origin, font, size, alignmentBaseline, textAnchor, lineSpacing = 1, lines}) => {
  const tspans = lines.map((line, i) => 
    <tspan key={i} x={origin.x} dy={`${i === 0 ? 0 : lineSpacing}em`}>{line}</tspan>);
  
  return (
    <g>
      <FullPageGradient id={id} origin={origin} />
      <text x={origin.x} y={origin.y} alignmentBaseline={alignmentBaseline} textAnchor={textAnchor}
        fill={`url(#${id})`} fontFamily={font} fontSize={size}>
        {tspans}
      </text>
    </g>
  );
}
