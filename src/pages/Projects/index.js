import React from 'react'

// Styles
import './index.css';

import Content from './Content';
import { projectList } from './content.json';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: [],
    }
  }

  handleFilter(event) {
    const arr = this.state.filters.slice();
    if (arr.indexOf(event.target.value) === -1) {
      arr.push(event.target.value);
    } else {
      arr.splice(arr.indexOf(event.target.value), 1);
    }

    this.setState({ filters: arr });
  }

  render() {
    return (
      <section className="projects">
        <h1 className="projects__title">Projects</h1>
        <ul className="projects__filters">
          <li>
            <label>React <input type="checkbox" name="filter" value="react" onChange={this.handleFilter.bind(this)} /></label>
          </li>
          <li>
            <label>jQuery <input type="checkbox" name="filter" value="jquery" onChange={this.handleFilter.bind(this)} /></label>
          </li>
          <li>
            <label>Node.js <input type="checkbox" name="filter" value="node.js" onChange={this.handleFilter.bind(this)} /></label>
          </li>
          <li>
            <label>Express <input type="checkbox" name="filter" value="express" onChange={this.handleFilter.bind(this)} /></label>
          </li>
          <li>
            <label>Ethereum <input type="checkbox" name="filter" value="ethereum" onChange={this.handleFilter.bind(this)} /></label>
          </li>
          <li>
            <label>Truffle <input type="checkbox" name="filter" value="truffle" onChange={this.handleFilter.bind(this)} /></label>
          </li>
          <li>
            <label>Solidity <input type="checkbox" name="filter" value="solidity" onChange={this.handleFilter.bind(this)} /></label>
          </li>
        </ul>
        <ul className="projectsList">
          {
            projectList.filter((pr) => {
              return this.state.filters.length === 0 || this.state.filters.every((filter) => {
                const tech = pr.tech.map((p) => p.toLowerCase());
                return tech.indexOf(filter) !== -1;
              });
            }).map(Content)
          }
        </ul>
      </section>
    );
  }
};

export default Portfolio;
