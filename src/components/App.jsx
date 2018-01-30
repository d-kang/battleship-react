import React, { PureComponent } from 'react';

import '../assets/App';

const createBoard = () => {
  return [
    [null, '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    ['A', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['B', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['C', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['D', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['E', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['F', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['G', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['H', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['I', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['J', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]
}

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
            {
              this.state.board_1.map((row, i, arr) => {
                return (
                  row.map((cell, k) => {
                    return (
                      i === 0 && arr[i][k] !== null
                        ? <div className="grid-item num">{k}</div>
                        : k === 0
                        ? <div className="grid-item letter">{cell}</div>
                        : <div className="grid-item"></div>
                    )
                  })
                )
              })
            }
          </div>
          <div className="grid-container opponent">
            {
              this.state.board_2.map((row, i, arr) => {
                return (
                  row.map((cell, k) => {
                    return (
                      i === 0 && arr[i][k] !== null
                        ? <div className="grid-item num">{k}</div>
                        : k === 0
                        ? <div className="grid-item letter">{cell}</div>
                        : <div className="grid-item"></div>
                    )
                  })
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default App;
