import React from 'react';
import CellMap from './CellMap';

const BoardMap = ({ board }) =>
  board.map((row, i, arr) => {
    return <CellMap key={i} i={i} row={row} arr={arr} />
  })

export default BoardMap;
