import React from 'react';
import { useState } from 'react';

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function row(rowNum) {
    return <div className="board-row">
      { Array(3).fill(0).map((_, colNum) => 
      <Square 
      value={squares[rowNum*3+colNum]}
      onSquareClick={() => handleClick(rowNum*3+colNum)}
      />
      )}
    </div>;
  }

  function Square({value, onSquareClick}) {
    return <button 
    className="square"
    onClick={onSquareClick}>
      {value}
    </button>;
  }

  function isSquareFilled(squareNo) {
    return !!squares[squareNo];
  }

  function calculateWinner() {
    return null;
  }

  function handleClick(squareNo) {
    if (isSquareFilled(squareNo)) {
      return;
    }
    const nextSquares = squares.slice();
    let sign = 'X';
    if (!xIsNext) {
      sign = 'O';
    }
    nextSquares[squareNo] = sign;
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  let status = "Next player: " + ((xIsNext) ? 'X' : 'O');
  
  const winner = calculateWinner();
  if (winner) {
    status = "Winner: " + status;
  }

  return (<React.Fragment> 
    <div className="status">{status}</div>
    {  Array(3).fill(null).map((_, rowNum) => row(rowNum)) }
  </React.Fragment>);

}

