import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  playerInitializeBoard,
  playerMove,
  opponentMove,
  makeOpponentMoveWithTimeout } from '../actions/creators';

class Cell extends PureComponent {
  state = {
    isPlayersTurn: true,
  }

  componentWillMount() {
    const { clSuffix, k, cell } = this.props;
    this.innerText = clSuffix === 'num'
      ? k
      : clSuffix === 'letter'
        ? cell
        : '';
  }

  componentWillUpdate(nextProps) {
    let {
      isPlayer,
      cell } = nextProps;
    this.renderPiece;
    if (Array.isArray(cell)) {
      if (isPlayer) {
        if (cell[0] === 1 && cell[1] === false) {
          this.renderPiece = { background: 'grey' };
        } else if (cell[0] === 1 && cell[1] === true) {
          this.renderPiece = { background: 'green' };
        } else if (cell[0] === 0 && cell[1] === true) {
          this.renderPiece = { background: 'red' };
        }
      } else if (!isPlayer) {
        if (cell[0] === -1 && cell[1] === true) {
          this.renderPiece = { background: 'green' };
        } else if (cell[0] === 0 && cell[1] === true) {
          this.renderPiece = { background: 'red' };
        }
      } else {
        this.renderPiece = {};
      }
    }
  }

  moves = () => {
    const {
      i,
      k,
      isPlayer,
      gameMode,
      playerInitializeBoard,
      playerMove,
      makeOpponentMoveWithTimeout } = this.props;
    if (isPlayer && gameMode === 'initialize') {
      playerInitializeBoard({ i, k });
    } else if (!isPlayer && gameMode === 'game_on') {
      playerMove({ i, k });
      makeOpponentMoveWithTimeout();
    }
  }

  render() {
    return (
      <div
        className={`board-item ${this.props.clSuffix}`}
        onClick={this.moves}
        style={this.renderPiece}
      >
        {this.innerText}
      </div>
    );
  }
}


Cell.propTypes = {
  cell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array
  ]).isRequired,
  clSuffix: PropTypes.string.isRequired,
  i: PropTypes.number.isRequired,
  k: PropTypes.number.isRequired,
  isPlayer: PropTypes.bool.isRequired,
  playerInitializeBoard: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  gameMode: state.board.game_mode,
});

const mapDispatchToProps = (dispatch) => ({
  playerInitializeBoard: (payload) => dispatch(playerInitializeBoard(payload)),
  playerMove: (payload) => dispatch(playerMove(payload)),
  opponentMove: () => dispatch(opponentMove()),
  makeOpponentMoveWithTimeout: () => dispatch(makeOpponentMoveWithTimeout()),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cell);