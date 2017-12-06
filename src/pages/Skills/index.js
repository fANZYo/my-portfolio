import React from 'react'
import { Icon } from 'react-fa';

// Styles
import './index.css';

const Skills = () => {
  return (
    <section className="skills">
      <h1 className="skills__heading">My skills and offer</h1>
      <p className="skills__blurb">I am a front-end web developer keen on getting more experience.</p>
      <p className="skills__blurb">I take part in hackathons to hone my skills and read books and articles to expand my knowledge. I am passionate about what I do and will build an expertise in development.</p>

      <h2 className="skills__title"><Icon name='code' /> Front-end web development</h2>

      <p>My current experience and skills in  front-end:</p>
      <ul className="skills__list">
        <li>Deep understanding of HTML5, CSS3 and vanilla JS</li>
        <li>Usage of CSS preprocessors Sass/Scss</li>
        <li>Mobile first approach</li>
        <li>Comfortable with React, jQuery JS libraries</li>
        <li>Experience with Node.js and Express</li>
        <li>Comfortable with RESTful API</li>
        <li>Usage of modern front end build tools, e.g. Gulp, Webpack</li>
        <li>Can't live without Git</li>
        <li>Cross-browser compatibility</li>
      </ul>

      <h2 className="skills__title"><Icon name='terminal' /> The future me</h2>
      <p className="skills__blurb">I am currently in the process of building an expertise in programming and want to expand my skillset in the following areas:</p>
      <ul className="skills__list">
        <li>Full stack development with Node.js and Python</li>
        <li>Specialisation in rapid prototyping and agile development</li>
        <li>Basics of data science</li>
      </ul>
    </section>
  );
};

export default Skills;
