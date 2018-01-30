import React, { PureComponent } from 'react';

import '../assets/App';
import { createBoard } from '../helpers';
import Board from './Board';

class App extends PureComponent {
  state = {
    board_1: [],
    board_2: []
  }

  componentDidMount() {
    this.setState({
      board_1: createBoard(),
      board_2: createBoard()
    })
  }

  render() {
    return (
      <div className='App'>
        <h1 className='header'>Welcome To BattleShip!</h1>
        <div className="flex-container">
          <div className="grid-container player">
            <Board board={this.state.board_1} />
          </div>
          <div className="grid-container opponent">
            <Board board={this.state.board_2} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
