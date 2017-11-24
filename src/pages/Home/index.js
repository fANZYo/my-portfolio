import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import './index.css';

const Home = () => {
  return (
    <div className="wrapper">
      <section className="heading">
        <h1 className="heading__title">William IEHL</h1>
        <p className="heading__subline">Front end developer</p>
        <Link className="heading__button" to="/projects">Projects</Link>
      </section>
    </div>
  );
};

export default Home;
