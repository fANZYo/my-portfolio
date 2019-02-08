import React from 'react'
import { Icon } from 'react-fa';

// Components
import Content from './Content';

// Styles
import './index.css';

class Blog extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: [], // Will hold a list of posts
			isLoading: true,
		};
	}

	// Set state with the list of posts on receive
	componentDidMount() {
		const sessionPosts = window.sessionStorage.getItem('posts');

		if (!sessionPosts) {
			fetch('/blogposts')
				.then(res => res.json())
				.then(posts => {
					const keys = Object.keys(posts);
					const temp = keys.map(k => posts[k]);

					this.setState({
						posts: temp,
					}, () => {
						window.sessionStorage.setItem('posts', JSON.stringify(this.state.posts));
					});
				});
		} else {
			this.setState({
				posts: JSON.parse(sessionPosts),
			});
		}
	}

	render() {
		return (
			<section className="blog wrapper">
				<h1 className="blog__heading">Blog Posts</h1>
				{
					this.state.posts.length === 0 ?
						<Icon className="loader" name="circle-o-notch" size="4x" spin /> :
						<ul className="blogposts">
							{this.state.posts.map(Content)}
						</ul>
				}
			</section>
		);
	}
};

export default Blog;
