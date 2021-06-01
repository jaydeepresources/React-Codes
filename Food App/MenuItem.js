import React, { Component } from 'react'

export class MenuItem extends Component {

    constructor() {
        super()
    }

    render() {
        return (
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <span>
                    {this.props.menuItem.mName}
                </span>
                <span>
                    ₹ {this.props.menuItem.mPrice}
                </span>
            </li>
        );
    }
}

export default MenuItem;