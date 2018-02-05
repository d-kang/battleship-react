import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './App.css';
import { createBoard } from '../helpers';
import Header from './Header';
import Boards from './Boards';
import { testAction } from '../actions/creators';
import Button from './Button';
import {
  startGame,
  initialize,
  restart } from '../actions/creators';

class App extends Component {
  logProps = console.log('props>>>', this.props);
  logState = console.log('state>>>', this.state);

  componentWillMount() {
    console.info('component will mount');
  }

  componentDidMount() {
    console.info('component did mount');
    console.log('>>>============Mounting Complete=================>>>');
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ isEven: nextProps.index % 2 === 0 });

    console.info('>>> component will receive props <<<');
    console.log({nextProps});
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.info('>>> should component update <<<');
    console.log({ nextProps, nextState });
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.info('>>> component will update <<<');
    console.log({ nextProps, nextState });
  }
  componentDidUpdate(prevProps, prevState) {
    console.info('>>> component did update <<<');
    console.log({ prevProps, prevState });
    console.log('<<<============Updating Complete=================<<<')
  }
  componentWillUnmount(...rest) {
    console.info('>>> component will unmount <<<');
    console.log({ rest });
  }

  handleClick = () => {
    const { buttonText } = this.props;
    if (buttonText === 'start game') {
      this.props.startGame();
    } else if (buttonText === 'initialize pieces') {
      this.props.initialize();
    } else if (buttonText === 'restart') {
      this.props.restart();
    }
  }

  render() {
    const {
      buttonText,
      instruction,
    } = this.props;

    return (
      <div className='App'>
        <Header />
        <Button
          onClick={this.handleClick}
          buttonText={buttonText}
        />
        <div>{instruction}</div>
        <Boards
          player={this.props.board_1}
          opponent={this.props.board_2}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  board_1: state.board.board_1,
  board_2: state.board.board_2,
  buttonText: state.board.buttonText,
  instruction: state.board.instruction,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  startGame: () => dispatch({ type: 'START_GAME' }),
  initialize: () => dispatch({ type: 'INITIALIZE_PIECES'}),
  restart: () => dispatch({ type: 'RESTART_GAME'}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
