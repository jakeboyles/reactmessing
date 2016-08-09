import React from 'react';
import './App.css';
import moment from 'moment';

const Day = function({data}) {
  let time = moment.unix(data.dt).format("dddd");
  return (
      <div className='day'>
          <h4>{time}</h4>
          <h2>Max: {data.temp.max}</h2>
          <h2>Min: {data.temp.min}</h2>
      </div>
  );
};

export default Day;