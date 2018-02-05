import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Cell = ({
  cell,
  clSuffix,
  i,
  k,
  clickCell,
  backgroundColor,
}) => {
  const innerText = clSuffix === 'num'
    ? k
    : clSuffix === 'letter'
    ? cell
    : '';
  return (
    <div
      className={`grid-item ${clSuffix}`}
      onClick={clickCell}
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

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cell);
