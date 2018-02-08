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

    <div className='game_ui'>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Class of ship</th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Carrier</td>
            <td>5</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Battleship</td>
            <td>4</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Cruiser</td>
            <td>3</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Submarine</td>
            <td>3</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Destroyer</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
    </div>
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
