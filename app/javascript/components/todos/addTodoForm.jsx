import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTodo } from '../../actions'

class AddTodoForm extends React.Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    var text = e.target.value
    this.setState({
      text
    })
  }

  handleSubmit(e){
    e.preventDefault()
    var text = this.state.text
    this.props.addTodo(text)
  }

  render () {
    let input;
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} />
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addTodo
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(AddTodoForm)
