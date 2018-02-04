import React from 'react';

const Cell = ({ cell, clSuffix, i, k }) => {
  const innerText = clSuffix === 'num'
    ? k
    : clSuffix === 'letter'
    ? cell
    : '';
  return (
    <div
      key={`${i}_${k}`}
      className={`grid-item ${clSuffix}`}
      onClick={() => console.log(`hi ${i} ${k}`)}
    >
      {innerText}
    </div>
  )
};


export default Cell;
