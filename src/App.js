import React from 'react';
import { useState } from 'react';

export default function Board() {
  return (<React.Fragment> {  Array(3).fill(null).map((_, rowNum) => row(rowNum)) }
  </React.Fragment>);

  function row(rowNum) {
    return <div className="board-row">
      { Array(3).fill(0).map(colNum => 
      <Square />
      )}
    </div>;
  }

  function Square() {
    const [value, setValue] = useState(null);

    function handleClick() {
      setValue('X');
    }

    return <button 
    className="square"
    onClick={handleClick}>
      {value}
    </button>;
  }
}

