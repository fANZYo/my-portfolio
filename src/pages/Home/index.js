import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import './index.css';

const Home = () => {
  return (
    <div className="center">
      <section className="heading">
        <h1 className="heading__title">William IEHL</h1>
        <p className="heading__subline">I am a front-end developer with a hint of UX design and back-end development.</p>
        <Link className="heading__button" to="/projects">Projects</Link>
      </section>
    </div>
  );
};

export default Home;
