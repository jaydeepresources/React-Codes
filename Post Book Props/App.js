import React, { Component } from 'react'
import Left from './components/Left'
import Right from './components/Right'

const axios = require('axios');

class App extends Component {

  constructor() {
    super()
    this.state = {
      users: [],
      selectedUserId: null
    }
  }

  handleUserIdSelection(id) {
    this.setState({ selectedUserId: id })
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

  render() {
    return (
      <div className="container">
        <p className="display-4 text-primary text-center my-4">Post Book</p>
        <hr />
        <div className="row mt-2">
          <div className="col-sm-3">
            <Left users={this.state.users} handleUserIdSelection={(id) => this.handleUserIdSelection(id)} />
          </div>
          <div className="col-sm">
            <Right selectedUserId={this.state.selectedUserId}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;