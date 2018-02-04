import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../assets/App';
import { createBoard } from '../helpers';
import Header from './Header';
import Boards from './Boards';

class App extends Component {

  state = {
    board_1: [[]],
    board_2: [[]],
    buttonText: 'start game',
    instruction: 'press start to start the game',
    isEven: true,
  }

  componentWillMount() {
    console.info('component will mount');
  }

  componentDidMount() {
    console.info('component did mount');
    this.setState({
      board_1: createBoard(),
      board_2: createBoard()
    });

    console.log('>>>============Mounting Complete=================>>>')
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ isEven: nextProps.index % 2 === 0 });

    console.info('>>> component will receive props <<<');
    console.log({nextProps});
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.info('>>> should component update <<<');
    console.log({ nextProps, nextState });

    return nextState.isEven ? true : false;
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

  render() {
    const {
      buttonText,
      instruction,
    } = this.state;

    return (
      <div className='App'>
        <Header />
        <button
          onClick={this.handleClick}
        >
          {buttonText}
        </button>
        <div>{instruction}</div>
        <Boards
          player={this.state.board_1}
          opponent={this.state.board_2}
        />
      </div>
    )
  }
}

export default App;
