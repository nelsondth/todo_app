import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import TodoScreen from '../components/todos/todoScreen'
import store from '../store'


document.addEventListener("DOMContentLoaded", e => {
  render((
    <Provider store={store}>
      <TodoScreen />
    </Provider>
    ),
    document.getElementById('todos')
  )
})
