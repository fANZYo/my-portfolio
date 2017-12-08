import React from 'react';

// Styles
import './index.css';

// Components
import Nav from './Nav';
import ContactIcons from './ContactIcons';

const Sidebar = (props) => {
  return (
    <aside className="sidebar">
      <ContactIcons className="sidebar__contacts" />
      <Nav className="sidebar__nav" navHandler={props.navHandler.bind(this)} collapsed={props.collapsed} />
    </aside>
  );
};

export default Sidebar;
