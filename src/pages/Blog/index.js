import React from 'react'

// Components
import Content from './Content';

// Styles
import './index.css';


class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: {}, // Will hold a list of posts
    };
  }

  // Set state with the list of posts on receive
  componentWillMount() {
    const data = null;
    const xhr = new XMLHttpRequest();

    // xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4 && xhr.responseText !== "") {
        this.setState({ posts: JSON.parse(xhr.responseText) });
      }
    });

    // CHANGE THIS LINE IN PRODUCTION
    xhr.open('GET', 'http://localhost:8080/blogposts');
    // xhr.setRequestHeader('cache-control', 'no-cache');

    xhr.send(data);
  }

  render() {
    return (
      <Content posts={this.state.posts}/>
    );
  }
};

export default Blog;
