import React from 'react'
import { Icon } from 'react-fa';

// Styles
import './index.css';

const Contact = () => {
  return (
    <section>
      <h1>Contact me</h1>
      <ul>
        <li>
          <a href="mailto:www.iehl@gmail.com" rel="noopener noreferrer"><Icon name='envelope' size='4x' /></a>
        </li>
        <li>
          <a href="https://github.com/fANZYo" target="_blank" rel="noopener noreferrer"><Icon name='github-square' size='4x' /></a>
        </li>
        <li>
          <a href="https://twitter.com/www_iehl" target="_blank" rel="noopener noreferrer"><Icon name='twitter-square' size='4x' /></a>
        </li>
        <li>
          <a href="https://www.facebook.com/www.iehl" target="_blank" rel="noopener noreferrer"><Icon name='facebook-square' size='4x' /></a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
