//reducer занимается обработкой actions
import { handleActions } from 'redux-actions';
import * as actions from '../actions'

const initialState = {
    counters: [],
}

const counterManagerReducer = handleActions({
    //state является текущее состояние на момент action
    [actions.CREATE_COUNTER]: (state) => {
        const newCounter = {
            countValue: 0,
        };
        const updatedCountersList = state.counters.map((counter) => {
            const isEven = counter.countValue % 2 === 0;
            return { countValue: isEven ? counter.countValue + 1 : counter.countValue }
        });
        return {
            counters: [...updatedCountersList, newCounter]
        }
    },
    [actions.RESET_COUNTER]: () => {
        return initialState
    },

    [actions.REMOVE_COUNTER]: (state, action) => {
        const stateCopy = [...state.counters];
        stateCopy.splice(action.payload, 1);
        const updatedState = stateCopy.map((counter) => {
            const isEven = counter.countValue % 2 === 0;
            return { countValue: !isEven ? counter.countValue - 1 : counter.countValue };
        });
        return {
            ...state,
            counters: updatedState
        }
    },
    [actions.INCREMENT_COUNTER]: (state, {payload}) => {
        const stateCopy = [...state.counters];
        stateCopy[payload].countValue = stateCopy[payload].countValue + 1;
        return {
            ...state,
            counters:stateCopy
        }
    },
    [actions.DECREMENT_COUNTER]: (state, {payload}) => {
        const stateCopy = [...state.counters];
        if (stateCopy[payload].countValue > 0) {
            stateCopy[payload].countValue = stateCopy[payload].countValue - 1;
            return {
                ...state,
                counters: stateCopy
            }
        }
        return {
            ...state
        }
    },
    [actions.RESET_VALUE_COUNTER]: (state, {payload}) => {
        const stateCopy = [...state.counters];
        stateCopy[payload].countValue = 0;
        return {
            ...state,
            counters: stateCopy
        }
    },
    [actions.SUM_COUNTER]: (state) => {
        return state.counters.reduce((result, currentCounter) => result += currentCounter.countValue, 0)
    }
}, initialState);

export default counterManagerReducer;