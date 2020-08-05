import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';
import Restaurants from './Restaurants';

import {
    BrowserRouter as Router,
    Route,
    NavLink 
} from 'react-router-dom';

class Navbar extends Component {

    render() {
        return (
            <Router>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                        <NavLink className="navbar-brand" to="/home" activeClassName="active">React-App</NavLink>                        
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarColor01">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/restaurants" activeClassName="active">Restaurants</NavLink>
                                </li>
                            </ul>

                             <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/register" activeClassName="active">Register</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/login" activeClassName="active">Login</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Route exact path="/restaurants" component={Restaurants} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
            </Router>
        );
    }
}

export default Navbar;