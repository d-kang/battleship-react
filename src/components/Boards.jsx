import React from 'react';
import PropTypes from 'prop-types';
import BoardMap from './BoardMap';
import GameInstruction from './GameInstruction';

const Boards = ({ player, opponent, mode, instruction, handleClick, buttonText }) =>
  <div className="container">
    <BoardMap
      board={player}
      isPlayer={true}
      className="board-container player"
      mode={mode}
    />
    <BoardMap
      board={opponent}
      isPlayer={false}
      className="board-container opponent"
      mode={mode}
    />
    <GameInstruction
      instruction={instruction}
      handleClick={handleClick}
      buttonText={buttonText}
      mode={mode}
    />
  </div>;

Boards.propTypes = {
  player: PropTypes.array.isRequired,
  opponent: PropTypes.array.isRequired,
  mode: PropTypes.string.isRequired,
  instruction: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Boards;
