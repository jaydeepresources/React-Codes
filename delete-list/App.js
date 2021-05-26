import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super()
    this.state = {
      items: ['Potato', 'Tomato', 'Pumpkin']
    }
  }

  mapItems() {
    const listItems = this.state.items.map((item, index) =>
      <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
        <span>
          {item}
        </span>
        <button className="btn btn-outline-danger material-icons btn-sm" onClick={() => this.deleteItem(index)}>clear</button>
      </li>
    )

    return listItems
  }

  deleteItem(index) {
    var temp = []
    Object.assign(temp, this.state.items)

    temp.splice(index, 1)
    this.setState({
      items: temp
    })
  }

  render() {

    return (
      <div className="container">
        <p className="display-4 my-3">Iterative Rendering</p>
        <hr />

        <ul className="list-group">
          {this.mapItems()}
        </ul>

      </div>
    );
  }
}

export default App;