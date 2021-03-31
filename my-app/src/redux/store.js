import {createStore,applyMiddleware, compose} from 'redux'
import logger from 'redux-logger'
import rootReducer from './root-reducer';



const store = createStore(rootReducer, compose(applyMiddleware(logger)));

export default store;