import { useState } from 'react';
import { useParams } from 'react-router';
import '@css/count_down.scoped.css';
import icon from '@assets/icon.svg';

import { getCurrentTime, getCurrentDate, getTimeDiff } from './common/common';

const CountDown = () => {
  let [currentDate, setDate] = useState(getCurrentDate('year', 'month', 'day'));
  let [timeTillOff, setTimeTillOff] = useState(' ');
  let [tipText, setText] = useState('');
  let { homeDate } = useParams();

  const refresher = () => {
    let now = getCurrentTime('hour', 'minute', 'second');
    let end = '';
    let text = '';
    let currentHour = getCurrentTime('hour');
    if (currentHour < 12) {
      end = '12:00:00';
      text = 'To lunch - ';
    } else if (currentHour < 14 && getCurrentTime('minute') <= 30) {
      end = '13:30:00';
      text = 'noon rest - ';
    } else if (currentHour < 18) {
      end = '18:00:00';
      text = 'Off work - ';
    } else {
      end = now;
      text = 'You are off!';
    }
    setDate(getCurrentDate('year', 'month', 'day'));
    setText(text);
    setTimeTillOff(getTimeDiff(now, end));
  };

  setInterval(() => {
    refresher();
  }, 500);

  return (
    <div className="count_down">
      <img src={icon} className="icon" alt="icon" />
      <div className="date">{homeDate}</div>
      <div className="time">
        <span>{tipText}</span>
        <span>{timeTillOff}</span>
      </div>
    </div>
  );
};

export default CountDown;
