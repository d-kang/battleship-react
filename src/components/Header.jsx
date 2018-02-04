import React from 'react';

const Header = ({ className, message }) =>
  <h1 className='header'>{message}</h1>

Header.defaultProps = {
  className: 'header',
  message: 'Welcome To BattleShip!',
};

export default Header;
