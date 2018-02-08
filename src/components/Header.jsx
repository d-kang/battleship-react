import React from 'react';
import GameInstruction from './GameInstruction';

const Header = ({ message }) =>
  <header>
    <div className="container">
      <div id="branding">
        <h1>
          {message}
        </h1>
      </div>
    </div>
  </header>;


Header.defaultProps = {
  className: 'header',
  message: 'Welcome To BattleShip!',
};

export default Header;
