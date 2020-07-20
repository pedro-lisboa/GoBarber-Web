import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactRouteProps,
  Redirect,
}
  from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

// (isPrivate === !!user)
// true/true = OK
// true/false = Reidrecionar pro Login
// false/true = Redirecionar pro Dashbord
// false/false = OK

const Route: React.FC<RouteProps> = ({ isPrivate = false, component: Component, ...rest }) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
    {...rest}
    render={({ location }) => {
      return isPrivate === !!user ? (
        <Component />
      ) : (
        <Redirect to={{
          pathname: isPrivate? '/' : '/Dashbord',
          state: { from: location },
        }} />
      )
    }} />
  );
};

export default Route;
