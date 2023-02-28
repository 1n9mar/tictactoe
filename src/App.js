import React from 'react';
import { useState } from 'react';

export default function Board() {
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

  function handleClick(squareNo) {
    const nextSquares = squares.slice();
    nextSquares[squareNo] = "X";
    setSquares(nextSquares);
  }

  return (<React.Fragment> {  Array(3).fill(null).map((_, rowNum) => row(rowNum)) }
  </React.Fragment>);

}

