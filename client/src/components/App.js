import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import Login from './login/Login'
import Registration from './registration/Registration'
import Home from './Home/Home'

class App extends Component {
  render() {
    return (
      <div className="container ">
        <div className="row">
            <div className="col-md-4"> </div>
            <div className="col-md-4">
              <h3>Money Mangement App</h3>
              <hr/>
              <Router>
                  <Switch>
                      <Route  path="/" exact component={Login}/>
                      <Route  path="/login" exact component={Login}/>
                      <Route  path="/registration" exact component={Registration}/>
                      <Route  path="/home" exact component={Home}/>

                  </Switch>
              </Router>
            </div>
            <div className="col-md-4"> </div>
        </div>
          
      </div>
    );
  }
}

export default App;
