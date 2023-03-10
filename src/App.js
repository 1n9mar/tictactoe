import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';


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
    return <Button
    variant="light"
    className="square"
    onClick={onSquareClick}>
      {value}
    </Button>;
  }

  function isSquareFilled(squareNo) {
    return !!squares[squareNo];
  }

  function containsThisWinningPosition(relevantSquares, winningPosition) {
    for (const index of winningPosition) {
      if (!relevantSquares.includes(index)) {
        return false;
      }
    }
    return true;
  }

  function containsAWinningPositionForPlayer(player) {
    const winningPositions = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    const relevantSquares = extractSquareIndexesWithValue(player);

    for (const winningPosition of winningPositions) {
      if (containsThisWinningPosition(relevantSquares, winningPosition)) {
        return true;
      }
    }
    return false;
  }

  function extractSquareIndexesWithValue(value) {
    const indexes = [];
    for (let i = 0; i<squares.length; i++) {
      if (squares[i] === value) {
        indexes.push(i);
      }
    }
    return indexes;
  }

  function calculateWinner() {
    for (const player of ['X', 'Y']) {
      if (containsAWinningPositionForPlayer(player)) {
        return player;
      }
    }
    return null;
  }

  function gameIsFinished() {
    return !!winner;
  }

  function handleClick(squareNo) {
    if (isSquareFilled(squareNo) || gameIsFinished()) {
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
    status = "Winner: " + winner;
  }

  return (
  <div className="App min-vh-100 justify-content-center align-items-center"> 
    <Alert variant={ gameIsFinished() ? "success" : "info"}>{status}</Alert>
    {  Array(3).fill(null).map((_, rowNum) => row(rowNum)) }
  </div>
  );

}

