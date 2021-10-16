import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as ReactLogo } from '@assets/react-logo.svg';
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import './style.scss'

export default () => {
  let location = useLocation();
  return (
    <header className='app_header'>
      {location.pathname === '/' ? (
        <ReactLogo className='logo' />
      ) : (
        <Link className='back' to='/'>
          <ArrowBackIosSharpIcon />
        </Link>
      )}
    </header>
  );
};
