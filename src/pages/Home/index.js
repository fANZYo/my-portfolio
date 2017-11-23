import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Sidebar from '../../components/Sidebar';

const Home = () => {
  return (
    <div>
      <Sidebar />

      <div className="wrapper">
        <section>
          <h1>William IEHL</h1>
          <p>Front end developer</p>
          <Link to="/projects">Projects</Link>
        </section>
      </div>
    </div>
  );
};

export default Home;
