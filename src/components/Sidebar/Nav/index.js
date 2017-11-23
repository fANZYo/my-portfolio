import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import './index.css'

const Nav = (props) => {
  return (
    <nav className={props.className}>
      <ul className="navList">
        <li className="navList__item"><Link to="/">Home</Link></li>
        <li className="navList__item"><Link to="/projects">Projects</Link></li>
        <li className="navList__item"><Link to="/skills">Skills</Link></li>
        <li className="navList__item"><Link to="/blog">Blog</Link></li>
        <li className="navList__item"><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
