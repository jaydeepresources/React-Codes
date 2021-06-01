import React, { Component } from 'react'
import Restaurant from './Restaurant'

class App extends Component {

  constructor() {
    super()

    this.state = {
      restaurants: [
        {
          rId: 1,
          rName: 'KFC',
          rCuisines: 'American, Fast Food, Snacks',
          rImage: 'https://indiaeducationdiary.in/wp-content/uploads/2020/10/IMG-20201024-WA0014.jpg',
          menuItems: [
            {
              mId: 1,
              mName: 'Zinger Burger',
              mPrice: 150
            },
            {
              mId: 2,
              mName: 'Big 8 Bucket',
              mPrice: 550
            }, {
              mId: 3,
              mName: 'Chicken Popcorn',
              mPrice: 250
            }
          ]
        },
        {
          rId: 2,
          rName: 'M Donald\'s',
          rCuisines: 'Fast Food',
          rImage: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/snao014yecjcbb54voys',
          menuItems: [
            {
              mId: 4,
              mName: 'Mc Chicken Burger',
              mPrice: 160
            },
            {
              mId: 5,
              mName: 'Large French Fries',
              mPrice: 200
            }, {
              mId: 6,
              mName: 'Paneer Wrap',
              mPrice: 270
            }
          ]
        },
        {
          rId: 3,
          rName: 'Dominoe\'s',
          rCuisines: 'Pizzas',
          rImage: 'https://i.ytimg.com/vi/CBeMNj-K93M/maxresdefault.jpg',
          menuItems: [
            {
              mId: 7,
              mName: 'Veg Farmhouse',
              mPrice: 450
            },
            {
              mId: 8,
              mName: 'Chicken Tikka',
              mPrice: 660
            }
          ]
        },
        {
          rId: 4,
          rName: 'Burger King',
          rCuisines: 'Fast Food',
          rImage: 'https://img1.mashed.com/img/gallery/a-big-change-is-coming-to-burger-kings-packaging/intro-1603400334.jpg',
          menuItems: [
            {
              mId: 9,
              mName:'Chicken Whopper',
              mPrice:330
            },
            {
              mId: 10,
              mName:'Veggie Strips',
              mPrice:90
            },{
              mId: 11,
              mName:'Paneer Overload Burger',
              mPrice:348
            }
          ]
        },
        {
          rId: 5,
          rName: 'Pizza Hut',
          rCuisines: 'Pizza',
          rImage: 'data:image/jpeg;base64,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',
          menuItems: [
            {
              mId: 12,
              mName:'Margarita Pizza',
              mPrice:130
            },
            {
              mId: 13,
              mName:'Veggie Supreme',
              mPrice:490
            },{
              mId: 14,
              mName:'Garlic Bread',
              mPrice:148
            }
          ]
        }
      ]
    }

  }

  mapRestaurants() {
    const card = this.state.restaurants.map((restaurant, index) =>
      <Restaurant key={restaurant.rId} restaurant={restaurant} />
    )

    return card
  }

  render() {
    return (
      <div className="container">
        <p className="h1 text-primary my-4">Foodie</p>
        <hr />
        <div className="row">
          {this.mapRestaurants()}
        </div>
      </div>
    );
  }
}

export default App;