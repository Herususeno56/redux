import {applyMiddleware, combineReducers, compose, createStore } from 'redux'
import counterReducer from './Features/Counter/reducer'
import thunk  from 'redux-thunk'

let rootReducer = combineReducers({
    counter: counterReducer
});

const composeEnhancers = window.__REDUX_DEVTOOL_EXTENSTION_COMPOSE__ || compose;
let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk )));
export default store;