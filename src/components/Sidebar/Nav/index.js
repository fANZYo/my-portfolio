import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'react-fa';

// Styles
import './index.css'

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true,
    };
  }

  handleDropdown(event) {
    event.stopPropagation();
    this.setState({ collapsed: !this.state.collapsed });
  }

  handleDropUp(event) {
    this.setState({ collapsed: true });
  }

  render() {
    return (
      <nav className={this.props.className}>
        <ul className={"navList" + (this.state.collapsed ? " navList--collapse" : "")}>
          <li onClick={this.handleDropdown.bind(this)} onMouseLeave={this.handleDropUp.bind(this)} className="navList__item__link navList__item--bars"><Icon name='bars' size='lg' /></li>
          <li className="navList__item"><NavLink tabIndex="-1" className="navList__item__link" to="/">Home</NavLink></li>
          <li className="navList__item"><NavLink tabIndex="-1" className="navList__item__link" to="/projects">Projects</NavLink></li>
          <li className="navList__item"><NavLink tabIndex="-1" className="navList__item__link" to="/skills">Skills</NavLink></li>
          <li className="navList__item"><NavLink tabIndex="-1" className="navList__item__link" to="/blog">Blog</NavLink></li>
          <li className="navList__item"><NavLink tabIndex="-1" className="navList__item__link" to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
