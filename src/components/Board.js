import React from 'react';

const Board = ({ board }) =>
  board.map((row, i, arr) => {
    return (
      row.map((cell, k) => {
        return (
          i === 0 && arr[i][k] !== null
            ? <div key={`${i}_${k}`} className="grid-item num">{k}</div>
            : k === 0
            ? <div key={`${i}_${k}`} className="grid-item letter">{cell}</div>
            : <div key={`${i}_${k}`} className="grid-item"></div>
        )
      })
    )
  })

export default Board;
