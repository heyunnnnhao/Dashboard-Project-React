import { Link, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import './style.scss';
import { getCurrentDate } from '@common/utils';



const Footer = () => {
  let date = new Date();
  return (
    <footer className='app_footer'>
      <span> &copy; Copyright 2020-{date.getFullYear()} @Yunhao He &nbsp;</span>
      <GitHubIcon fontSize='small' onClick={() => window.open('https://github.com/heyunnnnhao', '_blank').focus()} />
    </footer>
  );
};

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
        <HomeCard to={`/count_down/${homeDate}`} text='Count Down' />
        <HomeCard to='/test' text='Test' />
      </nav>
      <Footer />
    </>
  );
};
