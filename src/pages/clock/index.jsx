import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './style.scss';
import { useTime, getCurrentDate } from '@src/utils/common';

const Clock = () => {
  const { hour, minute, second } = useTime();
  let { homeDate } = useParams();

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
