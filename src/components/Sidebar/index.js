import React from 'react';

// Styles
import './index.css';

// Components
import Nav from './Nav';
import ContactIcons from './ContactIcons';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Nav className="sidebar__nav" />
      <ContactIcons className="sidebar__contacts" />
    </aside>
  );
};

export default Sidebar;
