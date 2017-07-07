import { createStore, compose, applyMiddleware } from 'redux';
import allReducers from '../reducers';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

const middleware = [ thunk ]

middleware.push(createLogger())

const enhancers = compose(
  applyMiddleware(...middleware),
);

const initialState = {
  todos: []
}

const store = createStore(allReducers, initialState, enhancers)

export default store
