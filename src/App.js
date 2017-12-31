import React from 'react';
import {
   BrowserRouter as Router,
} from 'react-router-dom';

// Routes
import Routes from './routes';

const App = (props) => {
   return (
      <Router>
         <Routes />
      </Router>
   );
};

export default App;
