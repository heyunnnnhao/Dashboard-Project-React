import { useState } from 'react';
import '../style/css/time.scoped.css';

import { getCurrentTime, getCurrentDate } from './common/common.js';

function Time() {
  let [currentDate, setDate] = useState(getCurrentDate('year', 'month', 'day'));
  let [currentTime, setTime] = useState(getCurrentTime('hour', 'minute', 'second'));

  setInterval(() => {
    refresher();
  }, 500);

  function refresher() {
    let date = getCurrentDate('year', 'month', 'day');
    let now = getCurrentTime('hour', 'minute', 'second');

    setDate(date);
    setTime(now);
  }

  return (
    <div className="clock">
      <div className="time">{currentTime}</div>
      <div>
        <span>{currentDate}</span>&ensp;
        <span>{getCurrentDate('week')}</span>
      </div>
    </div>
  );
}

export default Time;
