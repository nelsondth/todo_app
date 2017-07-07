import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Todo from './todo'

class TodoList extends React.Component {
  render () {
    return (
      <ul>
        {this.props.todos.map(todo =>
          <Todo
            key={todo.id}
            text={todo.text}
          />
        )}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, null)(TodoList)
