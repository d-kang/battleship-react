import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, buttonText }) =>
  <button
    onClick={onClick}
  >
    {buttonText}
  </button>

Button.defaultProps = {
  buttonText: 'click'
};
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
}

export default Button;