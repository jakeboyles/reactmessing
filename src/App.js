import React from 'react';
import './App.css';
import $ from 'jquery';
import Day from './Day';

var Main = React.createClass({

  getInitialState: function(){
    return {
      data:[],
      value: "Cincinnati"
    }
  },

  componentWillMount: function() {
    this.serverRequest = $.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.value}&mode=json&units=imperial&cnt=7&APPID=7cf16558d759d14815306832bd7341e2`, (result) => {
      this.setState({
        data: result.list,
      });
    });
  },

handleCityChange: function(e) {
   this.setState({value: e.target.value});
},

handleChange: function(event) {
    this.setState({value: this.state.value});

    this.serverRequest = $.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.value}&mode=json&units=imperial&cnt=7&APPID=7cf16558d759d14815306832bd7341e2`, (result) => {
      this.setState({
        data: result.list,
      });
    });

    event.preventDefault();
  },

  render: function(){

      return (
          <div>
          <form onSubmit={this.handleChange}>
            <input onChange={this.handleCityChange} type="text" />
            <button type="submit">Go</button>
          </form>

          {this.state.data.map(w =>
            <Day key={w.temp.day} data={w} />
          )}
          </div>
      ); 
  }
});

export default Main;
