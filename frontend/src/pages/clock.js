import { useState } from 'react';
import logo from '../assets/logo.svg';
import '../style/css/clock.css';

import { getCurrentTime, getTimeDiff } from './common/common.js';

function Clock() {
  let [currentTime, setTime] = useState(getCurrentTime('hour', 'minute', 'second'));
  let [currentDate, setDate] = useState(getCurrentTime('year', 'month', 'day'));
  let [timeTillOff, settimeTillOff] = useState(' ');
  let [text, setText] = useState('');

  setInterval(() => {
    refresher();
  }, 500);

  function refresher() {
    let date = getCurrentTime('year', 'month', 'day');
    let now = getCurrentTime('hour', 'minute', 'second');
    let end = '';
    if (getCurrentTime('hour') >= 12) {
      end = '18:00:00';
      setText('Off work');
    } else {
      end = '12:00:00';
      setText('to lunch')
    }
    setDate(date);
    setTime(now);
    settimeTillOff(getTimeDiff(now, end));
  }

  return (
    <div className="clock">
      <img src={logo} className="logo" alt="logo" />
      <h2>{currentDate}</h2>
      <h1>{text} - {timeTillOff}</h1>
    </div>
  );
}

export default Clock;
