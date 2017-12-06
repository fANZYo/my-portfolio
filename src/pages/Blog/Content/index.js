import React from 'react'

// Styles
import './index.css';

const Content = (props) => {
  const ks = Object.keys(props.posts);
  const url = 'https://medium.com/@williamiehl/';
  
  const items = ks.map((k) => {
    let item = props.posts[k];

    return (
      <li className="blogposts__item" key={item.id}>
        <h2 className="blogposts__item__title">{item.title}</h2>
        <p className="blogposts__item__description">{item.content.subtitle}</p>
        <a className="blogposts__item__link" href={url + item.uniqueSlug} target="_blank" rel="noopener noreferrer">Read</a>
      </li>
    );
  });

  return (
    <section className="blog">
      <ul className="blogposts">
        {items}
      </ul>
    </section>
  );
};

export default Content;
