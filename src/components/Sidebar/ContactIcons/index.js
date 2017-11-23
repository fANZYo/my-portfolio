import React from 'react';
import { Icon } from 'react-fa';

// Styles
import './index.css';

const ContactIcons = (props) => {
  return (
    <ul className={props.className + " iconList"}>
      <li className="iconList__item"><a href="https://twitter.com/www_iehl" target="_blank" rel="noopener noreferrer"><Icon name='twitter-square' size='lg' /></a></li>
      <li className="iconList__item"><a href="https://www.facebook.com/www.iehl" target="_blank" rel="noopener noreferrer"><Icon name='facebook-square' size='lg' /></a></li>
      <li className="iconList__item"><a href="https://github.com/fANZYo" target="_blank" rel="noopener noreferrer"><Icon name='github-square' size='lg' /></a></li>
    </ul>
  );
};

export default ContactIcons;
