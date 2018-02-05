import React from 'react';
import PropTypes from 'prop-types';
import BoardMap from './BoardMap';

const Boards = ({ player, opponent }) =>
  <div className="flex-container">
    <BoardMap
      board={player}
      isPlayer={true}
      className="grid-container player"
    />
    <BoardMap
      isPlayer={false}
      className="grid-container opponent"
      board={opponent}
      style={{borderTop: '1px'}}
    />
  </div>

Boards.propTypes = {
  player: PropTypes.array.isRequired,
  opponent: PropTypes.array.isRequired,
};

export default Boards;
