import React from 'react';
import { Switch, Route } from 'react-router-dom'
import FrontPage from '../pages/pagefindcep';
import containerMap from '../pages/pagemap';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={FrontPage} />
    <Route path="/locationmap" exact component={containerMap} />

  </Switch>
)

export default Routes;
