//метод createStore - создает мое хранилище. он принимает все reducer приложения
import { createStore } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'

import rootReducer from './rootReducer';

export function configureStore() {
    return createStore(rootReducer, composeWithDevTools());
}
