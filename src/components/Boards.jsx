import React from 'react';
import PropTypes from 'prop-types';
import BoardMap from './BoardMap';

const Boards = ({ player, opponent }) =>
  <div className="flex-container">
    <BoardMap
      board={player}
      className="grid-container player"
    />
    <BoardMap
      className="grid-container opponent"
      board={opponent}
    />
  </div>

Boards.propTypes = {
  player: PropTypes.array,
  opponent: PropTypes.array,
};

export default Boards;
