import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  playerInitializeBoard,
  playerMove } from '../actions/creators';

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

  componentWillUpdate(nextProps, nextState) {
    const {
      isPlayer,
      cell } = nextProps;
    this.renderPiece;
    if (Array.isArray(cell)) {
      if (isPlayer && cell[0] === 1) {
        this.renderPiece = { background: 'grey' };
      } else if (!isPlayer && cell[0] === -1 && cell[1] === true) {
        this.renderPiece = { background: 'grey' };
      } else if (!isPlayer && cell[0] === 0 && cell[1] === true) {
        this.renderPiece = { background: 'red' };
      } else {
        this.renderPiece = {};
      }
    }
  }

  moves = () => {
    const {
      cell,
      clSuffix,
      i,
      k,
      isPlayer,
      gameMode,
      playerInitializeBoard,
      playerMove } = this.props;
    if (isPlayer && gameMode === 'initialize') {
      playerInitializeBoard({ i, k });
    } else if (!isPlayer && gameMode === 'game_on') {
      playerMove({ i, k });
    }
  }

  render() {
    return (
      <div
        className={`grid-item ${this.props.clSuffix}`}
        onClick={this.moves}
        style={this.renderPiece}
      >
        {this.innerText}
      </div>
    )
  }
}


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
  playerInitializeBoard: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  gameMode: state.board.game_mode,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  playerInitializeBoard: payload => dispatch(playerInitializeBoard(payload)),
  playerMove: payload => dispatch(playerMove(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cell);
