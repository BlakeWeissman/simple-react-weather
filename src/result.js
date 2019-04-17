import React, { Component } from 'react';

class Result extends Component {
  render() {
    //If nonvaild weather data is provided
    if (this.props.weather === null) {
      return (
        <div id="nullResult" className="wrap flex">
          <h1 className="vCenter hCenter">Location Not Found.</h1>
        </div>
      );
    }    
    //If vaild weather data is provided
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