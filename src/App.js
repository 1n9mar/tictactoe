import React from 'react';

export default function Board() {
  return (<React.Fragment> {  [1, 2, 3].map(rowNum => row(rowNum)) }
  </React.Fragment>);

  function row(rowNum) {
    return <div className="board-row">
      { [1, 2, 3].map(colNum => 
      <Square value={(rowNum - 1) + colNum}/>
      )}
    </div>;
  }

  function Square({value}) {

    function handleClick() {
      console.log('clicked!');
    }

    return <button 
    className="square"
    onClick={handleClick}>
      {value}
    </button>;
  }
}

