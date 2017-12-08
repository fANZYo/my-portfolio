import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'react-fa';

// Styles
import './index.css'

const Nav = (props) => {
  return (
    <nav className={props.className}>
      <ul className={"navList" + (props.collapsed ? " navList--collapse" : "")}>
        <li onClick={props.navHandler.bind(this)} className="navList__item__link navList__item--bars"><Icon name='bars' size='lg' /></li>
        <li className="navList__item"><NavLink className="navList__item__link" to="/">Home</NavLink></li>
        <li className="navList__item"><NavLink className="navList__item__link" to="/projects">Projects</NavLink></li>
        <li className="navList__item"><NavLink className="navList__item__link" to="/skills">Skills</NavLink></li>
        <li className="navList__item"><NavLink className="navList__item__link" to="/blog">Blog</NavLink></li>
        <li className="navList__item"><NavLink className="navList__item__link" to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Nav;
