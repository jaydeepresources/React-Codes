import React, { Component } from 'react'
import Albums from './Albums'
import Posts from './Posts'
import Todos from './Todos'

const axios = require('axios');

class Right extends Component {

  constructor() {
    super()
    this.state = {
      posts: [],
      todos: [],
      albums: []
    }
  }

  componentDidMount() {
    this.getPostsFromAxios()
    this.getTodosFromAxios()
    this.getAlbumsFromAxios()
  }

  getPostsFromAxios() {
    if (this.props.selectedUserId)
      axios.get('https://jsonplaceholder.typicode.com/users/' + this.props.selectedUserId + '/posts')
        .then((response) => {
          this.setState({ posts: response.data })
        })
        .catch((error) => {
          console.log(error);
        })
  }


  getTodosFromAxios() {
    if (this.props.selectedUserId)
      axios.get('https://jsonplaceholder.typicode.com/users/' + this.props.selectedUserId + '/todos')
        .then((response) => {
          this.setState({ todos: response.data })
        })
        .catch((error) => {
          console.log(error);
        })
  }

  getAlbumsFromAxios() {
    if (this.props.selectedUserId)
      axios.get('https://jsonplaceholder.typicode.com/users/' + this.props.selectedUserId + '/albums')
        .then((response) => {
          this.setState({ albums: response.data })
        })
        .catch((error) => {
          console.log(error);
        })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedUserId !== this.props.selectedUserId) {
      this.getPostsFromAxios()
      this.getTodosFromAxios()
      this.getAlbumsFromAxios()
    }
  }

  render() {
    return (
      <div>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="posts-tab" data-bs-toggle="tab" data-bs-target="#posts" type="button" role="tab" aria-controls="posts" aria-selected="true">Posts</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="todos-tab" data-bs-toggle="tab" data-bs-target="#todos" type="button" role="tab" aria-controls="todos" aria-selected="false">Todos</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="albums-tab" data-bs-toggle="tab" data-bs-target="#albums" type="button" role="tab" aria-controls="albums" aria-selected="false">Albums</button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="posts-tab">
            <Posts posts={this.state.posts} />
          </div>
          <div className="tab-pane fade" id="todos" role="tabpanel" aria-labelledby="todos-tab">
            <Todos todos={this.state.todos} />
          </div>
          <div className="tab-pane fade" id="albums" role="tabpanel" aria-labelledby="albums-tab">
            <Albums albums={this.state.albums} />
          </div>
        </div>

        {
          (!this.props.selectedUserId)
            ?
            <div className="alert alert-success mt-3" role="alert">
              <h4 className="alert-heading">No data to display !</h4>
              <hr />
              <p className="mb-0">Please click on the name from the list to see the data.</p>
            </div>
            :
            ''
        }

      </div>
    );
  }
}

export default Right;