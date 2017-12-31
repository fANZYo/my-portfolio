import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const DefaultLayout = ({component: Component, ...rest}) => (
   <React.Fragment>
      <Route {...rest} render={(props) => (
         <Redirect to={{
            pathname: '/',
            state: { from: props.location }
         }} />
      )} />
   </React.Fragment>
);

export default DefaultLayout;

