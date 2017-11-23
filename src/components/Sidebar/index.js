import React from 'react';

// Styles
import './index.css';

// Components
import Nav from './Nav';
import ContactIcons from './ContactIcons';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Nav />
      <ContactIcons />
    </aside>
  );
};

export default Sidebar;
