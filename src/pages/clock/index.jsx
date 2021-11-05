import { useState, useEffect } from 'react';
import './style.scss';
import { useTime, getCurrentDate } from '@common';

export default () => {
  let { hour, minute, second } = useTime();
  return (
    <div className='clock'>
      <div className='time'>{`${hour}:${minute}:${second}`}</div>
      <div className='date'>
        <span>{getCurrentDate('year', 'month', 'day')}</span>&ensp;
        <span>{getCurrentDate('week')}</span>
      </div>
    </div>
  );
};
