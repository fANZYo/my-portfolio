import React from 'react';

const Content = (props, index) => {
  return (
    <li className="projectsList__item" key={index}>
      <img className="projectsList__item__img" src={props.imgurl} alt={props.imgdesc} />
      <h2 className="projectsList__item__title">{props.name}</h2>
      <p className="projectsList__item__blurb">{props.description}</p>

      {props.url !== "" &&
          <a className="projectsList__item__link" href={props.url} target="_blank" rel="noopener noreferrer">Website</a>
      }

      <a className="projectsList__item__link" href={props.github} target="_blank" rel="noopener noreferrer">GitHub</a>
    </li>
  );
};

export default Content;
