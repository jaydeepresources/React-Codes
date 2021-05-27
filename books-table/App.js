import React, { Component } from 'react';

class App extends Component {

  newId
  newName
  newPrice
  idFlag
  nameFlag
  priceFlag

  constructor() {
    super();
    this.state = {
      buttonFlag: true,
      idIcon: "unfold_more",
      nameIcon: "unfold_more",
      priceIcon: "unfold_more",
      books: [
        { id: 100, name: "Python", price: 500 },
        { id: 300, name: "Html", price: 100 },
        { id: 200, name: "Node JS", price: 350 },
      ]
    };
  }

  getBooks() {
    const books = this.state.books.map((book, index) =>
      <tr key={book.id}>
        <th scope="row">{index + 1}</th>
        <td>{book.id}</td>
        <td>{book.name}</td>
        <td>{book.price}</td>
        <td> <button className="btn material-icons text-danger" onClick={() => this.deleteBook(index)}>clear</button>
        </td>
      </tr>
    )
    return books
  }

  addBook() {

    var newBook = {
      id: parseInt(this.newId.value),
      name: this.newName.value,
      price: parseFloat(this.newPrice.value)
    }
    var list = this.state.books

    list.push(newBook)
    this.setState({ books: list, buttonFlag: true });
    this.newId.value = '';
    this.newName.value = '';
    this.newPrice.value = '';
  }

  textChanged() {
    this.setState({
      buttonFlag: (this.newId.value === '' || this.newName.value === '' || this.newPrice.value === '') ? true : false
    })
  }

  deleteBook(index) {
    var list = this.state.books;
    list.splice(index, 1)
    this.setState(
      {
        books: list
      });
  }

  sortById() {
    var localBooks = this.state.books

    if (this.idFlag === undefined)
      this.idFlag = true

    else if (this.idFlag !== undefined)
      this.idFlag = !this.idFlag

    if (this.idFlag) {
      localBooks.sort((a, b) => { return a.id - b.id })
      this.setState({ idIcon: "arrow_upward" })
    }

    else if (!this.idFlag) {
      localBooks.sort((a, b) => { return b.id - a.id })
      this.setState({ idIcon: "arrow_downward" })
    }
    this.setState({ books: localBooks, nameIcon: "unfold_more", priceIcon: "unfold_more" })
  }

  sortByName() {
    var localBooks = this.state.books

    if (this.nameFlag === undefined)
      this.nameFlag = true

    else if (this.nameFlag !== undefined)
      this.nameFlag = !this.nameFlag

    if (this.nameFlag) {
      localBooks.sort((a, b) => { return (a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0 })
      this.setState({ nameIcon: "arrow_upward" })
    }

    else if (!this.nameFlag) {
      localBooks.sort((a, b) => { return (a.name > b.name) ? -1 : (a.name < b.name) ? 1 : 0 })
      this.setState({ nameIcon: "arrow_downward" })
    }
    this.setState({ books: localBooks, idIcon: "unfold_more", priceIcon: "unfold_more" })
  }

  sortByPrice() {
    var localBooks = this.state.books

    if (this.priceFlag === undefined)
      this.priceFlag = true

    else if (this.priceFlag !== undefined)
      this.priceFlag = !this.priceFlag

    if (this.priceFlag) {
      localBooks.sort((a, b) => { return a.price - b.price })
      this.setState({ priceIcon: "arrow_upward" })
    }

    else if (!this.priceFlag) {
      localBooks.sort((a, b) => { return b.price - a.price })
      this.setState({ priceIcon: "arrow_downward" })
    }
    this.setState({ books: localBooks, idIcon: "unfold_more", nameIcon: "unfold_more" })
  }

  render() {
    return (
      <div className="container">
        <div className="my-4">
          <p className="display-4 text-center mb-0">Book Store</p>
        </div>

        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">
                <button className="btn p-0" onClick={() => this.sortById()}>
                  <div className="d-flex justify-content-around align-items-center">
                    <span className="mr-2">Id</span>
                    <i className="material-icons">{this.state.idIcon}</i>
                  </div>
                </button>
              </th>
              <th scope="col">
                <button className="btn p-0" onClick={() => this.sortByName()}>
                  <div className="d-flex justify-content-around align-items-center">
                    <span className="mr-2">Name</span>
                    <i className="material-icons">{this.state.nameIcon}</i>
                  </div>
                </button>
              </th>
              <th scope="col">
                <button className="btn p-0" onClick={() => this.sortByPrice()}>
                  <div className="d-flex justify-content-around align-items-center">
                    <span className="mr-2">Price</span>
                    <i className="material-icons">{this.state.priceIcon}</i>
                  </div>
                </button></th>

              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.getBooks()}
          </tbody>
        </table>

        <div className="d-flex mb-3">
          <input type="text" className="form-control mx-1" placeholder="Enter new Id"
            ref={(input) => { this.newId = input }} onInput={() => this.textChanged()} />
          <input type="text" className="form-control mx-1" placeholder="Enter new Name"
            ref={(input1) => this.newName = input1} onInput={() => this.textChanged()} />
          <input type="text" className="form-control mx-1" placeholder="Enter new Price"
            ref={(input2) => this.newPrice = input2} onInput={() => this.textChanged()} />

          <button className="btn btn-primary mr-2 material-icons" onClick={() => this.addBook()} disabled={this.state.buttonFlag} >
            add
          </button>
        </div>
      </div>
    );
  }
}
export default App;
