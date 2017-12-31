import React from 'react'
import { Icon } from 'react-fa';

// Styles
import './index.css';

const Contact = () => {
  return (
    <section className="contact wrapper">
      <h1 className="contact__heading">Contact me</h1>
      <ul className="contact__list">
        <li className="contact__list__item">
          <a className="contact__list__item__link" href="mailto:www.iehl@gmail.com" rel="noopener noreferrer" tabIndex="1">
            <Icon className="contact__list__item__icon contact__list__item__icon--reduce" name='envelope' />
            <h2 className="contact__list__item__title">Email</h2>
            <p>www.iehl@gmail.com</p>
          </a>
        </li>
        <li className="contact__list__item">
          <a className="contact__list__item__link" href="https://www.linkedin.com/in/william-iehl" target="_blank" rel="noopener noreferrer" tabIndex="2">
            <Icon className="contact__list__item__icon" name='linkedin-square' size='4x' />
            <h2 className="contact__list__item__title">LinkedIn</h2>
            <p className="contact__list__item__text">https://www.linkedin.com/in/william-iehl</p>
          </a>
        </li>
        <li className="contact__list__item">
          <a className="contact__list__item__link" href="https://github.com/fANZYo" target="_blank" rel="noopener noreferrer" tabIndex="3">
            <Icon className="contact__list__item__icon" name='github-square' size='4x' />
            <h2 className="contact__list__item__title">Github</h2>
            <p className="contact__list__item__text">https://github.com/fANZYo</p>
          </a>
        </li>
        <li className="contact__list__item">
          <a className="contact__list__item__link" href="https://twitter.com/www_iehl" target="_blank" rel="noopener noreferrer" tabIndex="4">
            <Icon className="contact__list__item__icon" name='twitter-square' size='4x' />
            <h2 className="contact__list__item__title">Twitter</h2>
            <p className="contact__list__item__text">https://twitter.com/www_iehl</p>
          </a>
        </li>
        <li className="contact__list__item">
          <a className="contact__list__item__link" href="https://www.facebook.com/www.iehl" target="_blank" rel="noopener noreferrer" tabIndex="5">
            <Icon className="contact__list__item__icon" name='facebook-square' size='4x' />
            <h2 className="contact__list__item__title">Facebook</h2>
            <p className="contact__list__item__text">https://www.facebook.com/www.iehl</p>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
