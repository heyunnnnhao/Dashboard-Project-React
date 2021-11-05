import { Link, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';

import './style.scss';
import { getCurrentDate } from '@common';

const HomeCard = ({ to, text }) => {
  return (
    <Link className='nav_item' to={to}>
      {text}
    </Link>
  );
};

export default () => {
  let homeDate = getCurrentDate('year', 'month', 'day');
  return (
    <>
      <nav id='navs' className='navs'>
        <HomeCard to='/clock' text='Clock' />
        <HomeCard to={`/world_clock/${homeDate}`} text='World Clock' />
        <HomeCard to='/test' text='Test' />
      </nav>
    </>
  );
};
