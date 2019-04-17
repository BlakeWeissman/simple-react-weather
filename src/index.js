import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Result from './result';

export class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      weather: null,
      temp: null,
      
    }
    this.search = this.search.bind(this);
    setNull = setNull.bind(this);
  }

  //Function that gets weather information given a location
  async search() {
    //Get the search query from the search input
    const value = document.getElementById("search").value;
    if (!value) {
      setNull();
    }
    else {
      //Get the weather data
      let getWeather = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + value + "&appid=bb60f742f138db4e828399812fffdfba")
        .then(function(response) {
          return response.json();
        }
      );
      //If the weather data is valid
      if (getWeather.cod != "404") {
        this.setState({ 
          name: getWeather.name,
          weather: getWeather.weather["0"].description
        });
      }
      //If the weather data is not valid
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
        <Result name={this.state.name} weather={this.state.weather} temp={this.state.temp} />
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