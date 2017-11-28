import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

// Components
import Sidebar from '../components/Sidebar';

// Pages
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Blog from '../pages/Blog';
import Skills from '../pages/Skills';
import Contact from '../pages/Contact';

const Routes = () => {
  return (
    <Router>
      <div>
        <Sidebar />
      
        <div className="wrapper">
          <Route exact path="/" component={Home}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/skills" component={Skills}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </div>
    </Router>
  )
};

export default Routes;
