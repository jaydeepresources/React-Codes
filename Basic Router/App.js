import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Posts from './components/Posts'
import Todos from './components/Todos'
import Albums from './components/Albums'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {

  // npm install react-router-dom

  render() {
    return (
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/todos">
            <Todos />
          </Route>
          <Route path="/albums">
            <Albums />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;