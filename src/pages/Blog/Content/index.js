import React from 'react'

// Styles
import './index.css';

const Content = (props) => {
  const url = 'https://medium.com/@williamiehl/';

  return (
      <li className="blogposts__item" key={props.id}>
        <h2 className="blogposts__item__title">{props.title}</h2>
        <p className="blogposts__item__description">{props.content.subtitle}</p>
        <a className="blogposts__item__link" href={url + props.uniqueSlug} target="_blank" rel="noopener noreferrer">Read</a>
      </li>
  );
};

export default Content;
