import React, { useState, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import CounterManagerLayout from '../components/CountersManagerLayout';
import { CREATE_COUNTER, REMOVE_COUNTER, INCREMENT_COUNTER, RESET_COUNTER, DECREMENT_COUNTER, RESET_VALUE_COUNTER, SUM_COUNTER } from '../actions';

const CountersManagerContainer = () => {

    const dispatch = useDispatch();
    const countersList = useSelector((state) => state.counterManager.counters);

    const handleCounterCreate = useCallback(() => {
        dispatch(CREATE_COUNTER());
    }, [dispatch]);

    const handleCountersReset = useCallback(() => {
         dispatch(RESET_COUNTER());
     }, [dispatch]);

    const handleCountersRemove = useCallback((index) => {
        dispatch(REMOVE_COUNTER(index));
    },
        [dispatch]
    )

    const handleCounterIncrement = useCallback((index) => {
        dispatch(INCREMENT_COUNTER(index));
    },
        [dispatch]
    )

    const handleCountersDecrement = useCallback((index) => {
        dispatch(DECREMENT_COUNTER(index))
    }, [dispatch]);

    const handleCountersValueReset = useCallback((index) => {
        dispatch(RESET_VALUE_COUNTER(index))
    }, [dispatch])

    const countersSum = useCallback(() => {
        dispatch(SUM_COUNTER());
    }, [dispatch])
    //const countersSum = useMemo(() => counters.reduce((result, currentCounter) => result += currentCounter.countValue, 0), [counters]);

    return <CounterManagerLayout
        countersList={countersList}
        handleCounterCreate={handleCounterCreate}
        handleCountersReset={handleCountersReset}
        handleCountersValueReset={handleCountersValueReset}
        handleCountersRemove={handleCountersRemove}
        handleCountersIncrement={handleCounterIncrement}
        handleCountersDecrement={handleCountersDecrement}
        //sum={countersSum}
    />
};

export default CountersManagerContainer;