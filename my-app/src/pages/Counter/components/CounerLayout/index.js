import React from 'react';
import './index.css'

const Counter = ({up, down, reset, countValue, odd}) => {
 return (
    <div>
       <h1>Counter</h1>
       <div className='counder'>
          <div className='counter-display'><span>{countValue}</span> <span>{odd}</span></div>
          <button onClick={up} className='counter-btn'>up</button>
          <button onClick={down} className='counter-btn'>down</button>
          <button onClick={reset} className='counter-btn'>reset</button>
       </div>
       <a href='/'>home</a>

    </div>
 )
};


export default Counter;
