import React from 'react'
import AddTodoForm from './addTodoForm'
import TodoFilters from './todoFilters'
import TodoList from './todoList'

const TodoScreen = () => (
  <div>
    <AddTodoForm />
    <TodoList />
    <TodoFilters />
  </div>
)

export default TodoScreen
