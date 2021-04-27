import { combineReducers } from 'redux';
import counterManager from '../pages/CountersManager/reducers'
import formPageContainerReducer from '../pages/FormPage/reducers'


const rootReducer = combineReducers({ counterManager, formPageContainerReducer });


export default (rootReducer);
