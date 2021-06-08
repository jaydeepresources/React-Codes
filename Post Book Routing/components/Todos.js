import React, { Component } from 'react'

const axios = require('axios');

class Todos extends Component {

  constructor() {
    super()
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    this.getTodosFromAxios()
  }

  getTodosFromAxios() {
    axios.get('https://jsonplaceholder.typicode.com/users/' + this.props.match.params.id + '/todos')
      .then((response) => {
        this.setState({ todos: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  mapTodos() {
    const list = this.state.todos.map((todo, index) =>
      <li className="list-group-item d-flex justify-content-between align-items-center" key={todo.id}>
        {todo.title}
        <span>
          <i className="material-icons">
            {(todo.completed) ? 'check' : 'schedule'}
          </i>
        </span>
      </li>
    )
    return list
  }


  render() {
    return (
      <div className="container">
        <p className="display-4 text-primary text-center my-4">Todos</p>
        <hr />
        <ul className="list-group">
          {this.mapTodos()}
        </ul>
      </div>
    );
  }
}

export default Todos;