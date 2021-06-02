import React, { Component } from 'react'

class Users extends Component {

  selectUserId(id) {
    this.props.handleUserIdSelection(id)
  }

  mapUsersList() {
    const list = this.props.users.map((user, index) =>
      <button type="button" className="list-group-item list-group-item-action" key={user.id} onClick={() => this.selectUserId(user.id)}>{user.name}</button>
    )
    return list
  }

  render() {
    return (
      <div>
        <div className="list-group">
          {this.mapUsersList()}
        </div>
      </div>
    );
  }
}

export default Users;