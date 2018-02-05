import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { placePiece } from '../actions/creators';

const Cell = ({
  cell,
  clSuffix,
  i,
  k,
  placePiece,
  isPlayer,
  backgroundColor,
}) => {
  const innerText = clSuffix === 'num'
    ? k
    : clSuffix === 'letter'
    ? cell
    : '';

  let action;
  if (isPlayer) {
    action = () => placePiece({ i, k });
  }
  return (
    <div
      className={`grid-item ${clSuffix}`}
      onClick={action}
      style={isPlayer && cell === 1 ? {background: 'grey'} : {}}
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
  clSuffix: PropTypes.string.isRequired,
  i: PropTypes.number.isRequired,
  k: PropTypes.number.isRequired,
  isPlayer: PropTypes.bool.isRequired,
  placePiece: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
  placePiece: (payload) => dispatch(placePiece(payload)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cell);
