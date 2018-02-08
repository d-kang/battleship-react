import React from 'react';
import Button from './Button';

const GameInstruction = ({ instruction, handleClick, buttonText }) =>
  <div
    style={{textAlign: 'center'}}
  >
    <div>{instruction}</div>
    <Button
      onClick={handleClick}
      buttonText={buttonText}
    />
  </div>

export default GameInstruction;
