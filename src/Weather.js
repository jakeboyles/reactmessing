import React from 'react';
import $ from 'jquery';
import Day from './Day';
import './App.css';

class Weather extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      value: 'Cincinnati',
      city: 'Cincinnati',
    };

    this.handleCityChange = this.handleCityChange.bind(this);
    this.submitLocation = this.submitLocation.bind(this);
  }

  componentWillMount() {
    $.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.value}&mode=json&units=imperial&cnt=7&APPID=7cf16558d759d14815306832bd7341e2`, (result) => {
      this.setState({
        data: result.list,
        city: result.city.name,
      });
    });
  }

  handleCityChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  submitLocation(e) {
    e.preventDefault();

    $.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.value}&mode=json&units=imperial&cnt=7&APPID=7cf16558d759d14815306832bd7341e2`, (result) => {
      this.setState({
        data: result.list,
        value: '',
        city: result.city.name,
      });
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitLocation}>
          <input value={this.state.value} onChange={this.handleCityChange} type="text" />
          <button type="submit">Go</button>
        </form>

        <p>Getting weather for: <b>{this.state.city}</b></p>

        {this.state.data.map((day) =>
          <Day key={day.dt} data={day} />
        )}
      </div>
    );
  }
}

export default Weather;
