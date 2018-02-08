import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const GameInstruction = ({ instruction, handleClick, buttonText, mode }) =>
  <section id='instructions'>
    <header className="header_2">Instructions to play against Computer</header>
    <Button
      onClick={handleClick}
      buttonText={buttonText}
    />
    <br/>
    <br/>
    <br/>
    <div>{instruction}</div>
  </section>;

GameInstruction.propTypes = {
  instruction: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
};

export default GameInstruction;
