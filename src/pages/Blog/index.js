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
  componentWillMount() {
    const data = null;
    const xhr = new XMLHttpRequest();

    // xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4 && xhr.responseText !== "") {
        let ks = Object.keys(JSON.parse(xhr.responseText));
        let posts = ks.map((k) => JSON.parse(xhr.responseText)[k]);

        this.setState({ posts });
      }
    });

    xhr.open('GET', '/blogposts');
    // xhr.setRequestHeader('cache-control', 'no-cache');

    xhr.send(data);
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
