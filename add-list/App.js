import React, { Component } from 'react';

class App extends Component {

  newItem

  constructor() {
    super()
    this.state = {
      items: ['Potato', 'Tomato', 'Pumpkin'],
      buttonFlag: true
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

  addItem() {
    var temp = []
    Object.assign(temp, this.state.items)
    temp.push(this.newItem.value)
    this.setState({
      items: temp
    })
    this.newItem.value = ''
    this.setState({ buttonFlag: true })
  }

  textValueChanged() {
    this.setState({
      buttonFlag: (this.newItem.value.length < 1) ? true : false
    })
  }

  render() {

    return (
      <div className="container">
        <p className="display-4 my-3">Iterative Rendering</p>
        <hr />

        <ul className="list-group mb-2">
          {this.mapItems()}
        </ul>

        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="enter new item..." ref={(input) => { this.newItem = input }} onInput={() => this.textValueChanged()} />
          <button className="btn btn-primary" type="button" onClick={() => this.addItem()} disabled={this.state.buttonFlag}>Add Item</button>
        </div>

      </div>
    );
  }
}

export default App;