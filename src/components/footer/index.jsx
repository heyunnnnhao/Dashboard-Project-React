import { useLocation } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import './style.scss'

export default () => {
  let location = useLocation();
  let date = new Date();
  if (location.pathname === '/') {
    return (
      <footer className='app_footer'>
        <span> &copy; Copyright 2020-{date.getFullYear()} @Yunhao He &nbsp;</span>
        <GitHubIcon fontSize='small' onClick={() => window.open('https://github.com/heyunnnnhao', '_blank').focus()} />
      </footer>
    );
  } else {
    return null;
  }
};
