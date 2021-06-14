import React from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'

import history from 'browser-history'
import Home from 'home'
import Authenticate from 'Auth/Authenticate'
import PageError from 'shared/components/page-error'

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Redirect exact from="/" to="/" />
      <Route path="/authenticate" component={Authenticate} />
      <Route path="/home" component={Home} />
      <Route component={PageError} />
    </Switch>
  </Router>
)

export default Routes