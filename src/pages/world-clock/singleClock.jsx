import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './style.scss';
import icon from '@assets/icon.svg';
import { useTime, ClockFace } from '@common';

export default ({ city, diff }) => {
  const { hour, minute, second } = useTime(true);

  return (
    <div className='clock'>
      <ClockFace hr={+hour + diff} min={minute} sec={second} uid={city} />
      {`${city} - ${+hour + diff}:${minute}:${second}`}
    </div>
  );
};
