import React from 'react';
import Cell from './Cell';

const CellMap = ({ row, arr, i }) =>
  row.map((cell, k) => {
    let clSuffix = (i === 0 && arr[i][k] !== null)
      ? 'num'
      : k === 0
      ? 'letter'
      : '';
    return (
      <Cell
        i={i}
        k={k}
        clSuffix={clSuffix}
        cell={cell}
      />
    )
  });


export default CellMap;
