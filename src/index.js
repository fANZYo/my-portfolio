import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Routes from './routes';

// Styles
import './reset.css';
import './index.css'

const App = () => {
  return (
    <Routes />
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
