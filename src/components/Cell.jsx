import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { placePiece } from '../actions/creators';

const Cell = ({
  cell,
  clSuffix,
  i,
  k,
  backgroundColor,
  isPlayer,
  gameMode,
  placePiece,
  guessOpponentPiece
}) => {
  const innerText = clSuffix === 'num'
    ? k
    : clSuffix === 'letter'
    ? cell
    : '';

  let action;
  if (isPlayer && gameMode === 'initialize') {
    action = () => placePiece({ i, k });
  } else if (!isPlayer && gameMode === 'game_on') {
    action = () => guessOpponentPiece({ i, k });
  }

  let renderPiece;
  if (Array.isArray(cell)) {
    console.log({cell});
    if (isPlayer && cell[0] === 1) {
      renderPiece = { background: 'grey' };
    } else if (!isPlayer && cell[0] === -1 && cell[1] === true) {
      renderPiece = { background: 'grey' };
    } else if (!isPlayer && cell[0] === 0 && cell[1] === true) {
      renderPiece = { background: 'red' };
    } else {
      renderPiece = {};
    }
    // renderPiece = isPlayer && cell[0] === 1
    //   ? { background: 'grey' }
    //   : !isPlayer && gameMode === 'game_on' && cell[0] === 1 && cell[1] === true
    //     ? { background: 'red' }
    //     : {}
  }

  return (
    <div
      className={`grid-item ${clSuffix}`}
      onClick={action}
      style={renderPiece}
    >
      {innerText}
    </div>
  )
};

Cell.propTypes = {
  cell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array
  ]),
  clSuffix: PropTypes.string.isRequired,
  i: PropTypes.number.isRequired,
  k: PropTypes.number.isRequired,
  isPlayer: PropTypes.bool.isRequired,
  placePiece: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  gameMode: state.board.game_mode,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  placePiece: (payload) => dispatch(placePiece(payload)),
  guessOpponentPiece: (payload) => dispatch({
    type: 'GUESS_OPPONENT_PIECE',
    payload,
  }),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cell);
