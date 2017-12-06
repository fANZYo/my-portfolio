import React from 'react'

// Styles
import './index.css';

import Content from './Content';
import { projectList } from './content.json';

const Portfolio = () => {
  return (
    <section className="projects">
      <h1 className="projects__title">Projects</h1>
      <p className="projects__text"></p>
      <ul className="projectsList">
        {projectList.map(Content)}
      </ul>
    </section>
  );
};

export default Portfolio;
