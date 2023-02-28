import React from 'react';

export default function Board() {
  return (<React.Fragment> {  [1, 2, 3].map(rowNum => row(rowNum)) }
  </React.Fragment>);

  function row(rowNum) {
    return <div className="board-row">{ [1, 2, 3].map(colNum => Square(rowNum, colNum)) }</div>;
  }

  function Square(rowNum, colNum) {
    return <button className="square">{(rowNum-1)+colNum}</button>;
  }
}

