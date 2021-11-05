import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './style.scss';
import icon from '@assets/icon.svg';
import { getCurrentTime, getTimeDiff, useTime } from '@common';

export default ({ timezone, UTChour }) => {
  return <div>{timezone}</div>;
};
