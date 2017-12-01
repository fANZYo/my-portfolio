import React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import './index.css'

const Nav = (props) => {
  return (
    <nav className={props.className}>
      <ul className="navList">
        <li className="navList__item"><NavLink activeClassName="navList__item--active" to="/">Home</NavLink></li>
        <li className="navList__item"><NavLink activeClassName="navList__item--active" to="/projects">Projects</NavLink></li>
        <li className="navList__item"><NavLink activeClassName="navList__item--active" to="/skills">Skills</NavLink></li>
        <li className="navList__item"><NavLink activeClassName="navList__item--active" to="/blog">Blog</NavLink></li>
        <li className="navList__item"><NavLink activeClassName="navList__item--active" to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Nav;
