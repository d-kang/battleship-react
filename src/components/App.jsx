import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './App.css';
import { createBoard } from '../helpers';
import Header from './Header';
import Boards from './Boards';
import { testAction } from '../actions/creators';

class App extends Component {
  state = {
    board_1: [[]],
    board_2: [[]],
    buttonText: 'start game',
    instruction: 'press start to start the game',
    placedPieces: null,
  }

  logProps = console.log('props>>>', this.props)
  logState = console.log('state>>>', this.state)

  componentWillMount() {
    console.info('component will mount');
  }

  componentDidMount() {
    this.setState({
      board_1: createBoard(),
      board_2: createBoard()
    });
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
    this.props.onClick();
    const { buttonText } = this.state;
    if (buttonText === 'start game') {
      this.setState({
        buttonText: 'initialize pieces',
        instruction: 'please place your pieces then press the button'
      });

    } else if (buttonText === 'initialize pieces') {
      this.setState({
        buttonText: 'restart',
        instruction: 'game has started, have fun'
      });
    } else if (buttonText === 'restart') {
      this.setState({
        buttonText: 'start game',
        instruction: 'press start to start the game'
      });
    }
  }

  placePiece = () => {
    const { board_1 } = this.state;

    const place = board_1.splice()[i][k] = 1;
    this.setState({ board_1: place });
  }

  render() {
    const {
      buttonText,
      instruction,
    } = this.state;

    return (
      <div className='App'>
        <Header />
        <Button />
        <div>{instruction}</div>
        <Boards
          player={this.state.board_1}
          placePiece={this.placePiece}
          opponent={this.state.board_2}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ test }, ownProps) => ({
  test: test,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(testAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
