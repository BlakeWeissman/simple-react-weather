import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Result from './result';

export class Index extends Component {
  constructor(props) {
    super(props);
    //this.search = this.search.bind(this);
  }

  /*search() {
    const value = parseInt(document.getElementById("search").value);
    if (isNaN(value) === false) {     
      this.setState({price: parseInt(document.getElementById("filter-price").value)});
    } 
    else {
      this.setState({price: 0});
    }
  }*/

  render() {
    return (
      <div>
        <div className="navbar">
          <div className="wrap vCenter flex">
            <div className="left">
              <h2>A Simple React Weather App</h2><p>Created by Blake Weissman</p>
            </div>
            <div className="right vCenter">
              <p>Search by Town/City Name</p>
              <input id="search" onChange={this.search}></input>
            </div>  
          </div>
        </div>
        <Result />
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));