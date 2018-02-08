import React from 'react';
import PropTypes from 'prop-types';
import BoardMap from './BoardMap';

const Boards = ({ player, opponent }) =>
  <div className="container">
    <BoardMap
      board={player}
      isPlayer={true}
      className="board-container player"
    />
    <BoardMap
      isPlayer={false}
      className="board-container opponent"
      board={opponent}
      style={{borderTop: '1px'}}
    />
  </div>;

Boards.propTypes = {
  player: PropTypes.array.isRequired,
  opponent: PropTypes.array.isRequired,
};

export default Boards;
