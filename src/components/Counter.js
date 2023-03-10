/*
이 컴포넌트에서는 number, onIncrease, onDecrease를 props로 받아온다.
*/
import React from 'react';

function Counter({ number, onIncrease, onDecrease }) {
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;