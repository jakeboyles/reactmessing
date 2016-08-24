import React from 'react';
import moment from 'moment';
import './App.css';

const Day = function Day({ data }) {
  let time = moment.unix(data.dt).format('dddd');
  let icon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  return (
    <div className="day">
      <h4>{time}</h4>
      <h2>Max: {data.temp.max}</h2>
      <h2>Min: {data.temp.min}</h2>
      <p className="paragraph">{data.weather[0].description}</p>
      <img className="icon" alt="weather icon" src={icon} />
    </div>
  );
};

export default Day;
