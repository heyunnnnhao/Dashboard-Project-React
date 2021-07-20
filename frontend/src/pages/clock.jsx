import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import '@css/clock.scoped.css';

import { getCurrentTime, getCurrentDate } from '@pages/common/common.js';

function Clock() {
  let [currentDate, setDate] = useState(getCurrentDate('year', 'month', 'day'));
  let [currentTime, setTime] = useState(getCurrentTime('hour', 'minute', 'second'));
  let { homeDate } = useParams();

  const refresher = () => {
    let date = getCurrentDate('year', 'month', 'day');
    let now = getCurrentTime('hour', 'minute', 'second');
    setDate(date);
    setTime(now);
  };

  useEffect(() => {
    setInterval(() => {
      refresher();
    }, 500);
  }, []);

  return (
    <div className="clock">
      <div className="time">{currentTime}</div>
      <div className="date">
        <span>{homeDate}</span>&ensp;
        <span>{getCurrentDate('week')}</span>
      </div>
    </div>
  );
}

export default Clock;
