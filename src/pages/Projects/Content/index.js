import React from 'react';

// Components
import Button from '../../../components/Button';

const Content = (props, index) => {
  const Tech = (props, index) => {
    return (
      <li className="projectsList__item__tech__list__item" key={index}>{props}</li>
    );
  };

  return (
    <li className="projectsList__item" key={index}>
      <div className="projectsList__item__container">
        <img className="projectsList__item__container__img" src={props.imgurl} alt={props.imgdesc} />
      </div>
      <h2 className="projectsList__item__title">{props.name}</h2>
      <p className="projectsList__item__blurb">{props.description}</p>
      <div className="projectsList__item__tech">
        <h3 className="projectsList__item__tech__title">Technologies</h3>
        <ul className="projectsList__item__tech__list">
          {props.tech.map(Tech)}
        </ul>
      </div>

      {props.url !== "" &&
          <Button href={props.url} label="Website" />
      }

      <Button href={props.github} label="GitHub" tabindex={index} />
    </li>
  );
};

export default Content;
