import React from 'react';
import { Route } from 'react-router-dom';

// Components
import Sidebar from '../components/Sidebar';

const DefaultLayout = ({component: Component, ...rest}) => (
   <React.Fragment>
      <header>
         <Sidebar />
      </header>
      <div className="center">
         <Route {...rest} render={(props) => (
            <Component {...props} />
         )} />
      </div>
   </React.Fragment>
);

export default DefaultLayout;

