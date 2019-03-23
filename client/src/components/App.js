import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import Login from './login/Login'
import Registration from './registration/Registration'

class App extends Component {
  render() {
    return (
      <div className="container ">
        <div class="row">
            <div class="col-md-4"> </div>
            <div class="col-md-4">
              <h3>Money Mangement App</h3>
              <hr/>
              <Router>
                  <Switch>
                      <Route  path="/" exact component={Login}/>
                      <Route  path="/registration" exact component={Registration}/>

                  </Switch>
              </Router>
            </div>
            <div class="col-md-4"> </div>
        </div>
          
      </div>
    );
  }
}

export default App;
