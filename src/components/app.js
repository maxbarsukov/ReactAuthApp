import React, { Component } from 'react';
import { BrowserRouting, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Home';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouting>
          <Switch>
            <Route exact path={"/"} component={Home}/>
            <Route exact path={"/dashboard"} component={Dashboard}/>
          </Switch>
        </BrowserRouting>
      </div>
    );
  }
}
