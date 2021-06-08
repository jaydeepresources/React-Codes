import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

const axios = require('axios');

class Users extends Component {

  constructor() {
    super()
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    this.getUsersFromAxios()
  }

  getUsersFromAxios() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        this.setState({ users: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  mapUsersList() {
    const list = this.state.users.map((user, index) =>
      <li className="list-group-item d-flex justify-content-between align-items-center" key={user.id}>
        <span>{user.name}</span>
        <div className="d-flex justify-content-between align-items-center">
          <NavLink className="nav-link" activeClassName="active" to={"/posts/" + user.id}>Posts</NavLink>
          <NavLink className="nav-link" activeClassName="active" to={"/todos/" + user.id}>Todos</NavLink>
          <NavLink className="nav-link" activeClassName="active" to={"/albums/" + user.id}>Albums</NavLink>
        </div>
      </li>
    )
    return list
  }

  render() {
    return (
      <div className="container">
        <p className="display-4 text-primary text-center my-4">Users</p>
        <hr />
        <div className="list-group">
          {this.mapUsersList()}
        </div>
      </div>
    );
  }
}

export default Users;