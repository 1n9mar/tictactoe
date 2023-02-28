import React from 'react';

export default function Square() {
  return (<React.Fragment> {  [1, 2, 3].map(rowNum => row(rowNum)) }
  </React.Fragment>);

  function row(rowNum) {
    return <div className="board-row">{ [1, 2, 3].map(colNum => cell(rowNum, colNum)) }</div>;
  }

  function cell(rowNum, colNum) {
    return <button className="square">X</button>;
  }
}

