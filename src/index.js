import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

// Components
import Sidebar from './components/Sidebar';

// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

// Styles
import './reset.css';

const App = () => {
  return (
    <Router>
      <div>
        <Sidebar />

        <div className="wrapper">
          <Route exact path="/" component={Home}/>
          <Route path="/Projects" component={Projects}/>
          <Route path="/skills" component={Skills}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
