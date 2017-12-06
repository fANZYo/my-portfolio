import React from 'react'
import { Icon } from 'react-fa';

// Styles
import './index.css';

const Skills = () => {
  return (
    <section className="skills">
      <h1 className="skills__heading">My skills and offer</h1>
      <p className="skills__blurb">I am a <em className="skills__blurb--em">front-end web developer</em> keen on getting more experience.</p>
      <p className="skills__blurb">I take part in <em className="skills__blurb--em">hackathons</em> to hone my skills and read books and articles to expand my knowledge. I am passionate about what I do and will build an expertise in development.</p>

      <h2 className="skills__title"><Icon name='code' size='' /> Front-end web development</h2>

      <p>My current experience and skills in  front-end:</p>
      <ul className="skills__list">
        <li>Deep understanding of <em className="skills__list--em">HTML5</em>, <em className="skills__list--em">CSS3</em> and <em className="skills__list--em">vanilla JS</em></li>
        <li>Usage of CSS preprocessors <em className="skills__list--em">Sass/Scss</em></li>
        <li><em className="skills__list--em">Mobile first</em> approach</li>
        <li>Comfortable with <em className="skills__list--em">React</em>, <em className="skills__list--em">jQuery</em> JS libraries</li>
        <li>Experience with <em className="skills__list--em">Node.js</em> and <em className="skills__list--em">Express</em></li>
        <li>Comfortable with <em className="skills__list--em">RESTful API</em></li>
        <li>Usage of modern front end build tools, e.g. <em className="skills__list--em">Gulp</em>, <em className="skills__list--em">Webpack</em></li>
        <li>Can't live without <em className="skills__list--em">Git</em></li>
        <li>Cross-browser compatibility</li>
      </ul>

      <h2 className="skills__title"><Icon name='terminal' size='' /> The future me</h2>
      <p className="skills__blurb">I am currently in the process of building an expertise in programming and want to expand my skillset in the following areas:</p>
      <ul className="skills__list">
        <li><em className="skills__list--em">Full stack</em> development with Node.js and Python</li>
        <li>Specialisation in <em className="skills__list--em">rapid prototyping</em> and <em className="skills__list--em">agile development</em></li>
        <li>Basics of <em className="skills__list--em">data science</em></li>
      </ul>
    </section>
  );
};

export default Skills;
