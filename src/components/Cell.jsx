import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { playerPlacePiece } from '../actions/creators';


const Cell = ({
  cell,
  clSuffix,
  i,
  k,
  backgroundColor,
  isPlayer,
  gameMode,
  playerPlacePiece,
  guessOpponentPiece
}) => {
  const innerText = clSuffix === 'num'
    ? k
    : clSuffix === 'letter'
    ? cell
    : '';

  let action;
  if (isPlayer && gameMode === 'initialize') {
    action = () => playerPlacePiece({ i, k });
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
  playerPlacePiece: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  gameMode: state.board.game_mode,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  playerPlacePiece: payload => dispatch(playerPlacePiece(payload)),
  guessOpponentPiece: payload => dispatch(),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cell);
