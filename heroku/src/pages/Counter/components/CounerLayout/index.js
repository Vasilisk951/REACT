import React from 'react';
import './index.css'
import PropTypes from 'prop-types';


import { Link } from "react-router-dom";

const Counter = ({ handleIncrement, handleDecrement, handleReset, countValue, parityType }) => {
   return (
      <div>
         <h1>Counter</h1>
         <div className='counder'>
            <div className='counter-display'><span>{countValue}</span> <span>{parityType}</span></div>
            <button onClick={handleIncrement} className='counter-btn'>up</button>
            <button onClick={handleDecrement} className='counter-btn'>down</button>
            <button onClick={handleReset} className='counter-btn'>reset</button>
         </div>
         <Link to="/">Home</Link>
      </div>
   )
};

Counter.propTypes = {
   countValue: PropTypes.number.isRequired,
   parityType: PropTypes.string.isRequired,
   handleDecrement: PropTypes.func.isRequired,
   handleIncrement: PropTypes.func.isRequired,
   handleReset: PropTypes.func.isRequired,
};

export default Counter;
