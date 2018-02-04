import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ cell, clSuffix, i, k }) => {
  const innerText = clSuffix === 'num'
    ? k
    : clSuffix === 'letter'
    ? cell
    : '';
  return (
    <div
      className={`grid-item ${clSuffix}`}
      onClick={() => console.log(`hi ${i} ${k}`)}
    >
      {innerText}
    </div>
  )
};

Cell.propTypes = {
  cell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  clSuffix: PropTypes.string,
  i: PropTypes.number,
  k: PropTypes.number,
};

export default Cell;
