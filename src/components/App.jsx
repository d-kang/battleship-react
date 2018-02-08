import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../assets/app.scss';
import Header from './Header';
import Boards from './Boards';
import {
  startGame,
  initialize,
  restart } from '../actions/creators';

export class App extends Component {
  state = {
    gameID: 0,
  }

  handleClick = () => {
    const { buttonText } = this.props;
    if (buttonText === 'Start') {
      this.props.startGame();
    } else if (buttonText === 'Ready') {
      this.props.initialize();
    } else if (buttonText === 'Forfeit') {
      this.setState({ gameID: this.state.gameID + 1 });
      this.props.restart();
    }
  }

  render() {
    const {
      buttonText,
      instruction,
      player_board_1,
      opponent_board_2,
      game_mode } = this.props;
    return (
      <div className='App' key={this.state.gameID}>
        <Header
          instruction={instruction}
          handleClick={this.handleClick}
          buttonText={buttonText}
        />
        <Boards
          player={player_board_1}
          opponent={opponent_board_2}
          mode={game_mode}
          instruction={instruction}
          handleClick={this.handleClick}
          buttonText={buttonText}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  player_board_1: state.board.player_board_1,
  opponent_board_2: state.board.opponent_board_2,
  buttonText: state.board.buttonText,
  instruction: state.board.instruction,
  game_mode: state.board.game_mode,
});

const mapDispatchToProps = (dispatch) => ({
  startGame: () => dispatch(startGame()),
  initialize: () => dispatch(initialize()),
  restart: () => dispatch(restart()),
});

App.propTypes = {
  player_board_1: PropTypes.array.isRequired,
  opponent_board_2: PropTypes.array.isRequired,
  buttonText: PropTypes.string.isRequired,
  instruction: PropTypes.string.isRequired,
  game_mode: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
