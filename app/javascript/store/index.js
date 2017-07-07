import { createStore } from 'redux';
import allReducers from '../reducers';

const initialState = {
  todos: []
}

const store = createStore(allReducers, initialState)

export default store
