import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchRestaurants } from '../actions/allActions';

class Restaurants extends Component {

  componentDidMount() {
    this.props.fetchRestaurants();
  }

  constructor() {
    super()
  }

  mapRestaurants() {
    const restaurantCards = this.props.reducer.map((restaurant, index) =>
      <div className="col-sm-3 my-3" key={index}>
        <div className="card mb-4">
          <img src={restaurant.restaurantImg} className="card-img-top" style={{ height: 193 }} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{restaurant.restaurantName}</h5>
            <p className="card-text text-secondary font-italic">
              {restaurant.restaurantSpeciality}
            </p>
            <a href="#" className="card-link">View Menu</a>
          </div>
        </div>
      </div>
    )
    return restaurantCards
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.mapRestaurants()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reducer: state.reducer.restaurants
});

export default connect(mapStateToProps, { fetchRestaurants })(Restaurants);
