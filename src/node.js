import React from 'react';

export default function Node({ word, x, y, branches }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <circle fill="none" stroke="#000" r="25" />
      <text textAnchor="middle" alignmentBaseline="central" fill="#888">
        {word.toUpperCase()}
      </text>
    </g>
  );
}
