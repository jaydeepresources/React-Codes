import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      data: [['', '', ''], ['', '', ''], ['', '', '']],
      flag: null,
      winnerMsg: ''
    }
  }

  setValue(row, col) {
    var data = []
    var flag

    Object.assign(data, this.state.data)
    flag = this.state.flag

    if (flag === null)
      flag = true

    else
      flag = !flag


    data[row][col] = (flag) ? 'X' : 'O'

    this.setState({
      data: data,
      flag: flag
    })
    this.calculateResultX()
    this.calculateResultY()
    this.calculateResultDiagonalX()
    this.calculateResultDiagonalY()
  }

  calculateResultX() {
    var countX = 0
    var countY = 0

    for (var j = 0; j < 3; j++) {
      countX = 0
      countY = 0
      for (var i = 0; i < 3; i++) {
        if (this.state.data[j][i] === 'X')
          countX++
        if (this.state.data[j][i] === 'O')
          countY++
      }
      if (countX === 3)
        this.setState({
          winnerMsg: 'Player 1 Wins !'
        })
      if (countY === 3)
        this.setState({
          winnerMsg: 'Player 2 Wins !'
        })
    }
  }

  calculateResultY() {
    var countX = 0
    var countY = 0

    for (var j = 0; j < 3; j++) {
      countX = 0
      countY = 0
      for (var i = 0; i < 3; i++) {
        if (this.state.data[i][j] === 'X')
          countX++
        if (this.state.data[i][j] === 'O')
          countY++
      }
      if (countX === 3)
        this.setState({
          winnerMsg: 'Player 1 Wins !'
        })
      if (countY === 3)
        this.setState({
          winnerMsg: 'Player 2 Wins !'
        })
    }
  }

  calculateResultDiagonalX() {
    var countX = 0
    var countY = 0

    for (var j = 0; j < 3; j++) {

      for (var i = 0; i < 3; i++) {
        if (i === j) {
          if (this.state.data[i][j] === 'X')
            countX++
          if (this.state.data[i][j] === 'O')
            countY++
        }
      }
      if (countX === 3)
        this.setState({
          winnerMsg: 'Player 1 Wins !'
        })
      if (countY === 3)
        this.setState({
          winnerMsg: 'Player 2 Wins !'
        })
    }
  }

  calculateResultDiagonalY() {
    var countX = 0
    var countY = 0

    for (var j = 0; j < 3; j++) {

      for (var i = 0; i < 3; i++) {
        if (i + j === 2) {
          if (this.state.data[i][j] === 'X')
            countX++
          if (this.state.data[i][j] === 'O')
            countY++
        }
      }
      if (countX === 3)
        this.setState({
          winnerMsg: 'Player 1 Wins !'
        })
      if (countY === 3)
        this.setState({
          winnerMsg: 'Player 2 Wins !'
        })
    }
  }

  mapRows() {
    const rows = this.state.data.map((r, index) =>
      <div className="row" key={index}>
        {this.mapCols(r,index)}
      </div>
    )

    return rows
  }

  mapCols(row, rowIndex) {
    const cols = row.map((c, index) =>
      <div className="col-sm-4 bg-primary p-1 border border-white" key={index}>
        <button className="btn btn-light my-button material-icons" disabled={c !== ''} onClick={() => this.setValue(rowIndex, index)}>{(c === 'X') ? 'clear' : (c === 'O') ? 'radio_button_unchecked' : ''}</button>
      </div>
    )
    return cols
  }

  render() {
    return (
      <div className="container">
        <div className="py-3 ">
          <p className="display-4 text-center my-4">Tic Tac Toe</p>
          <hr />
        </div>

        <p className="h3 mb-4">Player {(this.state.flag) ? '2' : '1'} to play</p>

        {this.mapRows()}

        <p className="h3 text-success mt-3">{this.state.winnerMsg}</p>

      </div>
    );
  }
}
export default App;
