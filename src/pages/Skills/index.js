import React from 'react'
import { Icon } from 'react-fa';

// Styles
import './index.css';

const Skills = () => {
  return (
    <section className="skills wrapper">
      <h1 className="skills__heading">My skills and offer</h1>
      <p className="skills__blurb">I am a front-end web developer keen on getting more experience.</p>
      <p className="skills__blurb">I take part in hackathons to hone my skills and read books and articles to expand my knowledge. I am passionate about what I do and will build an expertise in development.</p>

      <section className="skills__block">
        <h2 className="skills__title"><Icon className="skills__title__icon" name='code' /> Front-end web development</h2>

        <p>My current experience and skills in  front-end:</p>
        <ul className="skills__list">
          <li>Deep understanding of <em className="skills__list--em">HTML5</em>, <em className="skills__list--em">CSS3</em> and vanilla <em className="skills__list--em">JS</em></li>
          <li>Usage of CSS preprocessors <em className="skills__list--em">Sass/Scss</em></li>
          <li><em className="skills__list--em">Mobile first</em> approach</li>
          <li>Comfortable with <em className="skills__list--em">React</em>, <em className="skills__list--em">jQuery</em> JS libraries</li>
          <li>Experience with <em className="skills__list--em">Node.js</em> and <em className="skills__list--em">Express</em></li>
          <li>Comfortable with <em className="skills__list--em">RESTful API</em></li>
          <li>Usage of modern front end build tools, e.g. <em className="skills__list--em">Gulp</em>, <em className="skills__list--em">Webpack</em></li>
          <li>Can't live without <em className="skills__list--em">Git</em></li>
          <li>Cross-browser compatibility</li>
        </ul>
      </section>

      <section className="skills__block">
        <h2 className="skills__title"><Icon className="skills__title__icon" name='terminal' /> The future me</h2>
        <p className="skills__blurb">I am currently in the process of building an expertise in programming and want to expand my skillset in the following areas:</p>
        <ul className="skills__list">
          <li><em className="skills__list--em">Full stack development</em> with Node.js and Python</li>
          <li>Specialisation in <em className="skills__list--em">rapid prototyping</em> and agile development</li>
          <li>Basics of <em className="skills__list--em">data science</em></li>
        </ul>
      </section>
    </section>
  );
};

export default Skills;
