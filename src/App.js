import React from 'react';
import './App.css';
// Yeah I know...
import $ from 'jquery';
import Day from './Day';

var Main = React.createClass({

  getInitialState: function(){
    return {
      data:[],
      value: "Cincinnati",
      city:"Cincinnati",
    }
  },

  componentWillMount: function() {
    this.serverRequest = $.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.value}&mode=json&units=imperial&cnt=7&APPID=7cf16558d759d14815306832bd7341e2`, (result) => {
      this.setState({
        data: result.list,
        city:result.city.name,
      });
    });
  },

  handleCityChange: function(e) {
    this.setState({value: e.target.value});
  },

  submitLocation: function(event) {
  
    this.serverRequest = $.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.value}&mode=json&units=imperial&cnt=7&APPID=7cf16558d759d14815306832bd7341e2`, (result) => {
      this.setState({
        data: result.list,
        value:"",
        city:result.city.name,
      });
    });

    event.preventDefault();
  },

  render: function(){
      return (
          <div>
            <form onSubmit={this.submitLocation}>
              <input value={this.state.value} onChange={this.handleCityChange} type="text" />
              <button type="submit">Go</button>
            </form>

            <p>Getting weather for: {this.state.city}</p>
            {this.state.data.map((w,ind) =>
              <Day key={ind} data={w} />
            )}
          </div>
      ); 
  }
});

export default Main;
