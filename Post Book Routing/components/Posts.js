import React, { Component } from 'react'

const axios = require('axios');

class Posts extends Component {

  constructor() {
    super()
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.getPostsFromAxios()
  }

  getPostsFromAxios() {

    axios.get('https://jsonplaceholder.typicode.com/users/' + this.props.match.params.id + '/posts')
      .then((response) => {
        this.setState({ posts: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  mapPosts() {
    const cards = this.state.posts.map((post, index) =>
      <div className="card my-1" key={post.id}>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
        </div>
      </div>

    )
    return cards
  }

  render() {
    return (
      <div className="container">
        <p className="display-4 text-primary text-center my-4">Posts</p>
        <hr />
        {this.mapPosts()}
      </div>
    );
  }
}

export default Posts;