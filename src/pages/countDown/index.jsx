import { useState } from 'react';
import { useParams } from 'react-router';
import './style.scss';
import icon from 'assets/icon.svg';
import { getCurrentTime, getTimeDiff, useTime } from 'src/utils/common';

const CountDown = () => {
  let [timeTillOff, setTimeTillOff] = useState(' ');
  let [tipText, setText] = useState('');
  const { hour, minute, second } = useTime();
  let { homeDate } = useParams();

  const refresher = () => {
    let now = `${hour}:${minute}:${second}`;
    let end = '';
    let text = '';
    let currentHour = hour;
    if (currentHour < 12) {
      end = '12:00:00';
      text = 'To lunch - ';
    } else if (currentHour < 14 && hour <= 30) {
      end = '13:30:00';
      text = 'noon rest - ';
    } else if (currentHour < 19) {
      end = '19:00:00';
      text = 'Off work - ';
    } else {
      end = now;
      text = 'You are off!';
    }
    setText(text);
    setTimeTillOff(getTimeDiff(now, end));
  };

  setInterval(() => {
    refresher();
  }, 1000);

  return (
    <div className='count_down'>
      <img src={icon} className='icon' alt='icon' />
      <div className='date'>{homeDate}</div>
      <div className='time'>
        <span>{tipText}</span>
        <span>{timeTillOff}</span>
      </div>
    </div>
  );
};

export default CountDown;
