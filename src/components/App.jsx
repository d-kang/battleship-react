import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './App.css';
import Header from './Header';
import Boards from './Boards';
import Button from './Button';
import {
  startGame,
  initialize,
  restart } from '../actions/creators';

class App extends Component {
  state = {
    gameID: 0,
  }

  handleClick = () => {
    const { buttonText } = this.props;
    if (buttonText === 'start game') {
      this.props.startGame();
    } else if (buttonText === 'initialize pieces') {
      this.props.initialize();
    } else if (buttonText === 'restart') {
      this.setState({ gameID: this.state.gameID + 1 });
      this.props.restart();
    }
  }

  render() {
    const {
      buttonText,
      instruction,
    } = this.props;

    return (
      <div
        className='App'
        key={this.state.gameID}
      >
        <Header />
        <div
          style={{textAlign: 'center'}}
        >
          <div>{instruction}</div>
          <Button
            onClick={this.handleClick}
            buttonText={buttonText}
          />
        </div>
        <Boards
          player={this.props.player_board_1}
          opponent={this.props.opponent_board_2}
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
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
