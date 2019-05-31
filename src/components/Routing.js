import React, { Component } from 'react';
import './Routing.css'
import DisplayLogo from './DisplayLogo'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Error from './Error'
import Navigation from './Navigation'
import WhenHePlays from './WhenHePlays'

class Routing extends Component {
  componentDidMount() {
    document.title = "football-app"
  }
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <>
          <Navigation />
          <Switch>
            <Route exact path="/" component={DisplayLogo} />
            <Route path="/when" component={WhenHePlays} />
            <Route component={Error} />
          </Switch>
        </>
      </Router>
    );
  }

}

export default Routing;

