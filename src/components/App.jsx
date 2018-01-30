import React, { PureComponent } from 'react';


const createBoard = () => {
  return [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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
        <div className="flex-container">
          <div className="grid-container player">
            {
              this.state.board_1.map((row, i) => {
                return (
                  row.map((cell, k) => {
                    return (
                      <div className="grid-item"></div>
                    )
                  })
                )
              })
            }
          </div>
          <div className="grid-container opponent">
            {
              this.state.board_2.map((row, i) => {
                return (
                  row.map((cell, k) => {
                    return (
                      <div className="grid-item"></div>
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
