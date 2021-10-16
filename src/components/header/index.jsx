import { Link, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { ReactComponent as ReactLogo } from '@assets/react-logo.svg';
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import './style.scss';
import { useAuth } from '@common/auth/auth';

const AuthStatus = () => {
  let auth = useAuth();
  let navigate = useNavigate();

  if (!auth.user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <p>
      Welcome {auth.user}!{' '}
      <button
        onClick={() => {
          auth.signout(() => navigate('/'));
        }}
      >
        Sign out
      </button>
    </p>
  );
};

export default () => {
  let location = useLocation();
  return (
    <header className='app_header'>
      {location.pathname === '/' ? (
        <ReactLogo className='logo' />
      ) : (
        <Link className='back' to='/home'>
          <ArrowBackIosSharpIcon />
        </Link>
      )}
      <AuthStatus />
    </header>
  );
};
