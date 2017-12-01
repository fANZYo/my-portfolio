import React from 'react'

// Styles
import './index.css';

import Content from './Content';
import { projectList } from './content.json';

const Portfolio = () => {
  return (
    <section className="projects">
      <h1 className="projects__title">Project</h1>
      <p className="projects__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <ul className="projectsList">
        {projectList.map(Content)}
      </ul>
    </section>
  );
};

export default Portfolio;
