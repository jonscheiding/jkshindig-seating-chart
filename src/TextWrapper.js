import React from 'react';

export const TextWrapper = ({gradientId, origin, font, alignmentBaseline, textAnchor, lineSpacing = 1, lines}) => {
  const tspans = lines.map((line, i) => 
    <tspan key={i} x={origin.x} dy={`${i === 0 ? 0 : lineSpacing}em`}>{line}</tspan>);
  
  return (
    <text x={origin.x} y={origin.y} alignmentBaseline={alignmentBaseline} textAnchor={textAnchor}
      fill={`url(#${gradientId})`} fontFamily={font.name} fontSize={font.size}>
      {tspans}
    </text>
  );
}
