import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import store from '../store'


document.addEventListener("DOMContentLoaded", e => {
  render((
    <Provider store={store}>
      <div> Hola </div>
    </Provider>
    ),
    document.getElementById('todos')
  )
})
