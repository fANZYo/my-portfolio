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
      event.target.classList.add("projects__filters__button--selected")
    } else {
      arr.splice(arr.indexOf(event.target.value), 1);
      event.target.classList.remove("projects__filters__button--selected")
    }

    this.setState({ filters: arr });
  }

  render() {
    return (
      <section className="projects wrapper">
        <h1 className="projects__title">Projects</h1>
        <ul className="projects__filters">
          <li className="projects__filters__filter">
            <button className="projects__filters__button" onClick={this.handleFilter.bind(this)} value="react">React</button>
          </li>
          <li className="projects__filters__filter">
            <button className="projects__filters__button" onClick={this.handleFilter.bind(this)} value="jquery">jQuery</button>
          </li>
          <li className="projects__filters__filter">
            <button className="projects__filters__button" onClick={this.handleFilter.bind(this)} value="node.js">Node.js</button>
          </li>
          <li className="projects__filters__filter">
            <button className="projects__filters__button" onClick={this.handleFilter.bind(this)} value="express">Express</button>
          </li>
          <li className="projects__filters__filter">
            <button className="projects__filters__button" onClick={this.handleFilter.bind(this)} value="ethereum">Ethereum</button>
          </li>
          <li className="projects__filters__filter">
            <button className="projects__filters__button" onClick={this.handleFilter.bind(this)} value="truffle">Truffle</button>
          </li>
          <li className="projects__filters__filter">
            <button className="projects__filters__button" onClick={this.handleFilter.bind(this)} value="solidity">Solidity</button>
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
