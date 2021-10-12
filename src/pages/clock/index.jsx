import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './style.scss';
import { getCurrentTime, getCurrentDate } from '@src/utils/common';

const Clock = () => {
  let [currentTime, setTime] = useState(getCurrentTime('hour', 'minute', 'second'));
  let { homeDate } = useParams();

  const refresher = () => {
    let now = getCurrentTime('hour', 'minute', 'second');
    setTime(now);
  };

  useEffect(() => {
    setInterval(() => {
      refresher();
    }, 1000);
  }, []);

  return (
    <div className='clock'>
      <div className='time'>{currentTime}</div>
      <div className='date'>
        <span>{homeDate}</span>&ensp;
        <span>{getCurrentDate('week')}</span>
      </div>
    </div>
  );
};

export default Clock;
