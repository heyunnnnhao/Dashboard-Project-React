import { useState } from 'react';
import { useParams } from 'react-router';
import '@css/clock.scoped.css';

import { getCurrentTime, getCurrentDate } from '@pages/common/common.js';

function Clock() {
  let [currentDate, setDate] = useState(getCurrentDate('year', 'month', 'day'));
  let [currentTime, setTime] = useState(getCurrentTime('hour', 'minute', 'second'));
  let { day } = useParams();

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
      <div>date: {day}</div>
      <div className="date">
        <span>{currentDate}</span>&ensp;
        <span>{getCurrentDate('week')}</span>
      </div>
    </div>
  );
}

export default Clock;
