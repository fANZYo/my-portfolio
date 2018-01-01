import React from 'react';
import { Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// Components
import Sidebar from '../components/Sidebar';

const DefaultLayout = ({location, component: Component, ...rest}) => (
  <React.Fragment>
    <header>
      <Sidebar />
    </header>
    <div className="center">
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={250}
          classNames='slide'>
          <Route {...rest} render={(props) => (
            <Component {...props} />
          )} />
        </CSSTransition>
      </TransitionGroup>
    </div>
  </React.Fragment>
);

export default DefaultLayout;

