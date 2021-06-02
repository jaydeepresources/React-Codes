import React, { Component } from 'react'

class Albums extends Component {

  mapAlbums() {
    const cards = this.props.albums.map((album, index) =>
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
      <div className="mt-2">
        {this.mapAlbums()}
      </div>
    );
  }
}

export default Albums;