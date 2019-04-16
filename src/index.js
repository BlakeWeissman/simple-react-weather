import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Result from './result';

export class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null,
      name: null
    }
    this.search = this.search.bind(this);
    setNull = setNull.bind(this);
  }

  async search() {
    const value = document.getElementById("search").value;
    if (!value) {
      setNull();
    }
    else {
      if (value !== undefined) {  
        let getWeather = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + value + "&appid=bb60f742f138db4e828399812fffdfba")
          .then(function(response) {
            return response.json();
          }
        );
        console.log("get: "+  Object.keys(getWeather));
        if (getWeather.cod != "404") {
          console.log("test2: " + getWeather.name);
          this.setState({ 
            weather: getWeather.weather["0"].description,
            name: getWeather.name
          });
        }
        else {
          setNull();
        }
      } 
      else {  
        setNull();
      }
    }
  }

  render() {
    return (
      <div>
        <div className="navbar">
          <div className="wrap vCenter flex">
            <div className="left">
              <h2>A Simple React Weather App</h2><p>Created by Blake Weissman</p>
            </div>
            <div className="right vCenter">
              <p>Search by Location</p>
              <input id="search" onChange={this.search}></input>
            </div>  
          </div>
        </div>
        <Result name={this.state.name} weather={this.state.weather} />
      </div>
    );
  }
}

function setNull() {
  this.setState({ 
    weather: null,
    name: null 
  });
}

ReactDOM.render(<Index />, document.getElementById("root"));