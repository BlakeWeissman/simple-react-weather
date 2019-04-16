import React, { Component } from 'react';

class Result extends Component {
  render() {
    if (this.props.weather === null) {
      return (
        <div id="result" className="wrap">
          <h1>Location Not Found.</h1>
        </div>
      );
    }    
    else {
      return (
        <div id="result" className="wrap">
          <h1>{this.props.name}</h1>
          <h2>Description: {this.props.weather}</h2>
        </div>
      );
    }
  }
}

export default Result;