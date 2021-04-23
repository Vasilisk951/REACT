import {combineReducers} from 'redux';
import counterManager from '../pages/CountersManager/reducers'


const rootReducer = combineReducers({counterManager});

export default rootReducer;