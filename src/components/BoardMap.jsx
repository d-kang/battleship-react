import React from 'react';
import CellMap from './CellMap';
import PropTypes from 'prop-types';

const BoardMap = ({ board, className, isPlayer }) =>
  <div>
    {isPlayer && 'Player Board'}
    <div className={className}>
      {
        board.map((row, i) => {
          return <CellMap
            isPlayer={isPlayer}
            key={i}
            i={i}
            row={row}
          />
        })
      }
    </div>
    <div
      style={{textAlign: 'end'}}
    >
      {!isPlayer && 'Opponent Board'}
    </div>
  </div>

BoardMap.propTypes = {
  board: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired,
  isPlayer: PropTypes.bool.isRequired,
};
export default BoardMap;
