import React from 'react';
import Node from './node';

export default function Tree({ data }) {
  return (
    <svg height="1000" width="1000">
      <g transform="translate(500,500)">
        <Node word={data.word} x={0} y={0} />
      </g>
    </svg>
  );
}
