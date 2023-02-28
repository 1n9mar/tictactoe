import React from 'react';
import { useState } from 'react';

export default function Board() {
  return (<React.Fragment> {  [1, 2, 3].map(rowNum => row(rowNum)) }
  </React.Fragment>);

  function row(rowNum) {
    return <div className="board-row">
      { [1, 2, 3].map(colNum => 
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

