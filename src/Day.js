import React from 'react';
import './App.css';
import moment from 'moment';

const Day = ({ data }) => {
  let time = moment.unix(data.dt).format("dddd");
  return (
      <div>
          <h2>The temp will be: {data.temp.day} on {time} </h2>
      </div>
  );
};

export default Day;