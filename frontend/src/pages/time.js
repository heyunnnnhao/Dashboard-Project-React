import { useState } from 'react';
import logo from '../assets/logo.svg';
import '../style/css/time.css';

import { getCurrentTime } from './common/common.js';

function Time() {
  let [currentTime, setTime] = useState(getCurrentTime('hour', 'minute', 'second'));
  let [currentDate, setDate] = useState(getCurrentTime('year', 'month', 'day'));

  setInterval(() => {
    refresher();
  }, 500);

  function refresher() {
    let date = getCurrentTime('year', 'month', 'day');
    let now = getCurrentTime('hour', 'minute', 'second');

    setDate(date);
    setTime(now);
  }

  return (
    <div className="clock">
      <img src={logo} className="logo" alt="logo" />
      <h2>{currentDate}</h2>
      <h1>{currentTime}</h1>
    </div>
  );
}

export default Time;
