import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super()
    this.state = {
      items: ['John', 'Roy', 'George']
    }
  }

  mapItems() {
    const listItems = this.state.items.map((item, index) =>
      <li key={index} className="list-group-item">{item}</li>
    )

    return listItems
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