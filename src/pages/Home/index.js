import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import './index.css';

const Home = (props) => {
  return (
    <div className="center">
      <section className="heading">
        <h1 className="heading__title">William IEHL</h1>
        <p className="heading__subline">Front-end developer with a hint of UX and back-end.</p>
        <Link to="/projects" className="heading__button" tabIndex="1">Projects</Link>
        <Link to="/contact" className="heading__button heading__button--fill" tabIndex="2">Contact me</Link>
      </section>
    </div>
  );
};

export default Home;
