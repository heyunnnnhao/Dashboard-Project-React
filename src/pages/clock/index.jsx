import { useState, useEffect } from 'react';
import './style.scss';
import { useTime, getCurrentDate } from '@src/utils/common';

const Clock = () => {
  const { hour, minute, second } = useTime();
  const homeDate = getCurrentDate('year', 'month', 'day');
  return (
    <div className='clock'>
      <div className='time'>{`${hour}:${minute}:${second}`}</div>
      <div className='date'>
        <span>{homeDate}</span>&ensp;
        <span>{getCurrentDate('week')}</span>
      </div>
    </div>
  );
};

export default Clock;
