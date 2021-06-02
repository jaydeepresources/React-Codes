import React, { Component } from 'react'

class Posts extends Component {

  mapPosts() {
    const cards = this.props.posts.map((post, index) =>

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
      <div className="mt-2">
        {this.mapPosts()}
      </div>
    );
  }
}

export default Posts;