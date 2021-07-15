import { useState } from 'react';
import logo from '../assets/logo.svg';
import '../style/css/count_down.scoped.css';

import { getCurrentTime, getCurrentDate, getTimeDiff } from './common/common.js';

function Clock() {
  let [currentDate, setDate] = useState(getCurrentDate('year', 'month', 'day'));
  let [currentTime, setTime] = useState(getCurrentTime('hour', 'minute', 'second'));
  let [timeTillOff, settimeTillOff] = useState(' ');
  let [text, setText] = useState('');

  function refresher() {
    let date = getCurrentDate('year', 'month', 'day');
    let now = getCurrentTime('hour', 'minute', 'second');
    let end = '';

    let currentHour = getCurrentTime('hour');
    if (currentHour < 12) {
      end = '12:00:00';
      setText('To lunch - ');
    } else if (currentHour < 14 && getCurrentTime('minute') <= 30) {
      end = '13:30:00';
      setText('noon rest - ');
    } else if (currentHour < 18) {
      end = '18:00:00';
      setText('Off work - ');
    } else {
      setText('You are off!');
    }
    setDate(date);
    setTime(now);
    settimeTillOff(getTimeDiff(now, end));
  }

  setInterval(() => {
    refresher();
  }, 500);

  return (
    <div className="clock">
      <img src={logo} className="logo" alt="logo" />
      <div>{currentDate}</div>
      <div className="time">
        <span>{text}</span>
        <span>{timeTillOff}</span>
      </div>
    </div>
  );
}

export default Clock;
