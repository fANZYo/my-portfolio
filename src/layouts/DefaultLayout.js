import React from 'react';
import { Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// Components
import Sidebar from '../components/Sidebar';

const DefaultLayout = ({location, component: Component, ...rest}) => {
  return (
    <React.Fragment>
      <header>
        <Sidebar />
      </header>
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
    </React.Fragment>
  );
}

export default DefaultLayout;

