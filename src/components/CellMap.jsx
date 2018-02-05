import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

const CellMap = ({ row, i, isPlayer }) =>
  row.map((cell, k) => {
    let clSuffix = (i === 0 && row[k] !== null)
      ? 'num'
      : k === 0
      ? 'letter'
      : '';
    return (
      <Cell
        isPlayer={isPlayer}
        key={`${i}_${k}`}
        i={i}
        k={k}
        clSuffix={clSuffix}
        cell={cell}
      />
    )
  });

CellMap.propTypes = {
  row: PropTypes.array.isRequired,
  i: PropTypes.number.isRequired,
  isPlayer: PropTypes.bool.isRequired,
}

export default CellMap;
