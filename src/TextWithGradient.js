import React from 'react';

import { FullPageGradient } from './FullPageGradient';

export const TextWithGradient = ({id, origin, font, size, alignmentBaseline, textAnchor, lineSpacing = 1, lines}) => {
  const tspans = lines.map((line, i) => 
    <tspan key={i} x='0' dy={`${i === 0 ? 0 : lineSpacing}em`}>{line}</tspan>);
  
  return (
    <g transform={`translate(${origin.x} ${origin.y})`}>
      <FullPageGradient id={id} origin={origin} />
      <text x={0} y={0} alignmentBaseline={alignmentBaseline} textAnchor={textAnchor}
        fill={`url(#${id})`} fontFamily={font} fontSize={size}>
        {tspans}
        {/* ABCDE \n
        ABCDE */}
      </text>
    </g>
  );
}
