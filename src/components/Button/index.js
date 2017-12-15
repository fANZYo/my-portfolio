import React from 'react';

// Styles
import './index.css';

const Button = (props) => {
  return (
    <a className="linkBtn" href={props.href} target="_blank" rel="noopener noreferrer" tabindex={props.tabindex}>{props.label}</a>
  );
};

export default Button;
