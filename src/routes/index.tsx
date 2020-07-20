import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Dashbord from '../pages/Dashbord';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={SignIn} exact/>
    <Route path="/SignUp" component={SignUp} />

    <Route path="/Dashbord" component={Dashbord} isPrivate />
  </Switch>
)

export default Routes;
