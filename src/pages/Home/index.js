import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section>
      <h1>William IEHL</h1>
      <p>Front end developer</p>
      <Link to="/projects">Projects</Link>
    </section>
  );
};

export default Home;
