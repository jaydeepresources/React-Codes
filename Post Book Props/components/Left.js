import React, { Component } from 'react'
import Users from './Users'

class Left extends Component {

    handleUserIdSelection(id) {
        this.props.handleUserIdSelection(id)
    }

    render() {
        return (
            <Users users={this.props.users} handleUserIdSelection={(id) => this.handleUserIdSelection(id)} />
        );
    }
}

export default Left;