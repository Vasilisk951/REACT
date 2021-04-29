import { useState } from "react";
import FuncCounter from "./index";

function FuncCounterH() {

    const [counterState, setCounterState] = useState ({
        countValue: 0,
        parityType: 'even',
    })

    const handleIncrement = () => {
        setCounterState({countValue: counterState.countValue + 1});
        updateParityType();
    }

    const handleDecrement = () => {
        if(counterState.countValue > 0) {
            setCounterState({countValue: counterState.countValue - 1})
            updateParityType();
        }
    }

    const handleReset = () => {
        setCounterState({countValue: counterState.countValue = 0});
        updateParityType();
    }

    const updateParityType = () => {
        setCounterState((state) => {
            console.log('state: ', state);
            const parityType = state.countValue % 2 === 0 ? 'even' : 'odd';
            return {
                ...state,
                parityType,
            }
            }
        )
    }


    return (
        <FuncCounter
    countValue = {counterState.countValue}
    parityType = {counterState.parityType}
    handleIncrement = {handleIncrement}
    handleDecrement = {handleDecrement}
    handleReset = {handleReset}
    />
    
    )
  }

export default FuncCounterH;