import React from 'react';
import './App.css';

const Day = ({ data }) => {
  return (
      <div>
          <h2 key={data.temp.day}>The temp will be: {data.temp.day}</h2>
      </div>
  );
};

export default Day;