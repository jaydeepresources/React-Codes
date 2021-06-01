import React, { Component } from 'react'
import MenuItem from './MenuItem'
import './index.css'

class Restaurant extends Component {

    constructor() {
        super()
    }

    mapMenuItems() {
        const list = this.props.restaurant.menuItems.map((menuItem, index) =>
            <MenuItem key={menuItem.mId} menuItem={menuItem}></MenuItem>
        )
        return list
    }

    render() {
        return (
            <div className="col-sm-3 px-1 py-1">

                <div className="card ">
                    <img src={this.props.restaurant.rImage} className="my-image" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.restaurant.rName}</h5>
                        <p className="card-text">{this.props.restaurant.rCuisines}</p>
                        <button className="btn btn-primary btn-sm" type="button" data-bs-toggle="collapse" data-bs-target={'#collapseExample' + this.props.restaurant.rId} aria-expanded="false" aria-controls="collapseExample">
                            Quick View
                    </button>
                    </div>
                </div>

                <div className="collapse mt-2" id={'collapseExample' + this.props.restaurant.rId}>
                    <div className="card card-body p-0">
                        <ul className="list-group">
                            {this.mapMenuItems()}
                        </ul>
                    </div>
                </div>

            </div>
        );
    }
}

export default Restaurant;