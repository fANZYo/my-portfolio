import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

// Styles
import './reset.css';
import './index.css'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/Projects" component={Projects}/>
        <Route path="/skills" component={Skills}/>
        <Route path="/blog" component={Blog}/>
        <Route path="/contact" component={Contact}/>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
