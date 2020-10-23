import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import  thunk  from 'redux-thunk';

const initStore = {}

export const store = createStore(
    rootReducer(), initStore, applyMiddleware(thunk)
)