import React, { useMemo } from 'react';
import './index.css'
import PropTypes from 'prop-types';

const FuncCounter = ({
   handleIncrement,
   handleDecrement,
   handleReset,
   handleRemove,
   countValue,
}) => {

   const isEven = useMemo(() => countValue % 2 === 0, [countValue])

   return (

      <div>
         <div style={{ background: isEven ? 'red' : 'green' }} className='counter-item'>
            <button onClick={handleRemove}>remove</button>
            <div className='counter-display'>
               <span>{countValue}</span> <span>{isEven ? 'even' : 'odd'}</span>
            </div>
            <button onClick={handleIncrement} className='counter-btn'>up</button>
            <button onClick={handleDecrement} className='counter-btn'>down</button>
            <button onClick={handleReset} className='counter-btn'>reset</button>
         </div>
      </div>

   )
};

FuncCounter.propTypes = {
   countValue: PropTypes.number.isRequired,
   handleDecrement: PropTypes.func.isRequired,
   handleIncrement: PropTypes.func.isRequired,
   handleReset: PropTypes.func.isRequired,
   handleRemove: PropTypes.func.isRequired,
};
export default React.memo(FuncCounter)
