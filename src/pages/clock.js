import { useState } from 'react';
import logo from '../assets/logo.svg';
import '../style/css/clock.css';
import './common/common.js';

import { getCurrentTime } from './common/common.js';

function Clock() {
  let [currentTime, setTime] = useState('Loading...');

  setInterval(() => {
    let time = getCurrentTime('year', 'month', 'day', 'hour', 'minute', 'second');
    setTime(time);
  }, 500);
  
  return (
    <div className="clock">
      <img src={logo} className="logo" alt="logo" />
      <div>{currentTime}</div>
    </div>
  );
}

export default Clock;
