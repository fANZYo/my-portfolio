import React from 'react'

// Styles
import './index.css';

// Components
import Button from '../../../components/Button';

const Content = (props, index) => {
	const url = 'https://medium.com/@williamiehl/';

	return (
		<li className="blogposts__item" key={props.id}>
			<h2 className="blogposts__item__title">{props.title}</h2>
			<p className="blogposts__item__description">{props.content.subtitle}</p>
			<Button href={url + props.uniqueSlug} label="Read" tabIndex={index} />
		</li>
	);
};

export default Content;
