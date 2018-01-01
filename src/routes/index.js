import React from 'react';
import {
  Switch
} from 'react-router-dom';

// Layouts
import DefaultLayout from '../layouts/DefaultLayout';
import BlankLayout from '../layouts/BlankLayout';

// Pages
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Blog from '../pages/Blog';
import Skills from '../pages/Skills';
import Contact from '../pages/Contact';

const Routes = () => {
   return (
      <Switch>
         <DefaultLayout exact path="/" component={Home}/>
         <DefaultLayout path="/projects" component={Projects}/>
         <DefaultLayout path="/blog" component={Blog}/>
         <DefaultLayout path="/skills" component={Skills}/>
         <DefaultLayout path="/contact" component={Contact}/>
         <BlankLayout path="/:else" />
      </Switch>
   );
};

export default Routes;
