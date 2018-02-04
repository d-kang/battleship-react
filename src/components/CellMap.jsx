import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

const CellMap = ({ row, i }) =>
  row.map((cell, k) => {
    let clSuffix = (i === 0 && row[k] !== null)
      ? 'num'
      : k === 0
      ? 'letter'
      : '';
    return (
      <Cell
        key={`${i}_${k}`}
        i={i}
        k={k}
        clSuffix={clSuffix}
        cell={cell}
      />
    )
  });

CellMap.propTypes = {
  row: PropTypes.array,
  arr: PropTypes.array,
  i: PropTypes.number,
}

export default CellMap;
