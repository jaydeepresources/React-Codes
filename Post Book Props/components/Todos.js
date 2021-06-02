import React, { Component } from 'react'

class Todos extends Component {

  mapTodos() {
    const list = this.props.todos.map((todo, index) =>
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
      <div className="">
        <ul className="list-group mt-2">
          {this.mapTodos()}
        </ul>
      </div>
    );
  }
}

export default Todos;