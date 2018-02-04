import React from 'react';
import CellMap from './CellMap';
import PropTypes from 'prop-types';

const BoardMap = ({ board, className, placePiece }) =>
  <div className={className}>
    {
      board.map((row, i) => {
        return <CellMap
          key={i}
          i={i}
          row={row}
          placePiece={placePiece}
        />
      })
    }
  </div>

BoardMap.propTypes = {
  board: PropTypes.array,
  className: PropTypes.string,
};
export default BoardMap;
