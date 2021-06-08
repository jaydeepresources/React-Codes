import React, { Component } from 'react'

const axios = require('axios');

class Albums extends Component {

  constructor() {
    super()

    this.state = {
      albums: []
    }
  }

  componentDidMount() {
    this.getAlbumsFromAxios()
  }

  getAlbumsFromAxios() {
    axios.get('https://jsonplaceholder.typicode.com/users/' + this.props.match.params.id + '/albums')
      .then((response) => {
        this.setState({ albums: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  mapAlbums() {
    const cards = this.state.albums.map((album, index) =>
      <div className="card my-2" key={album.id}>
        <div className="d-flex justify-content-start align-items-center">
          <img src="https://png.pngtree.com/png-vector/20190618/ourlarge/pngtree-photo-album-line-black-icon-png-image_1503518.jpg" className="me-2" alt="..." style={{ width: 45, height: 'auto' }} />
          <p className="card-text">{album.title}</p>
        </div>
      </div>
    )
    return cards
  }

  render() {
    return (
      <div className="container">
        <p className="display-4 text-primary text-center my-4">Albums</p>
        <hr />
        {this.mapAlbums()}
      </div>
    );
  }
}

export default Albums;