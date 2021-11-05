import { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import './app.scss';
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.min.css';
import { AuthProvider, RequireAuth, useAuth } from './common/auth/auth';
import { ReactComponent as ReactLogo } from '@assets/react-logo.svg';
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { getCookie } from './common';

import { Home, Login, WorldClock, Clock, Test } from './pages/index';

const NotFound = () => {
  let location = useLocation();
  return (
    <div>
      <span className='not_found'>
        Location <span>{location.pathname}</span> does not exist!
      </span>
    </div>
  );
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const [locale, setLocale] = useState('login');
  let auth = useAuth();
  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    if (location.pathname == '/') {
      setLocale('login');
    } else if (location.pathname == '/home') {
      setLocale('home');
    } else {
      setLocale('module');
    }
  }, [location]);

  return (
    <header className='app_header' style={{ backgroundColor: locale == 'module' ? 'transparent' : 'rgba(255, 255, 255, 0.2)' }}>
      {locale == 'module' ? (
        <Link className='back' to='/home'>
          <ArrowBackIosSharpIcon />
        </Link>
      ) : (
        <ReactLogo className='logo' />
      )}

      {locale == 'home' ? (
        <Button className='status' variant='outlined' onClick={() => setOpen(true)}>
          {getCookie('logIn')}
        </Button>
      ) : null}

      <Dialog onClose={() => setOpen(false)} open={open}>
        <DialogTitle>{auth.user}</DialogTitle>
        <List sx={{ pt: 0 }}>
          <ListItem
            autoFocus
            button
            onClick={() => {
              setOpen(false);
              auth.signout(() => navigate('/'));
            }}
          >
            <ListItemText primary='Log out' />
          </ListItem>
        </List>
      </Dialog>
    </header>
  );
};

export default () => {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route element={<Login />} path='/' />
        <Route
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
          path='/home'
        />
        <Route
          element={
            <RequireAuth>
              <WorldClock />
            </RequireAuth>
          }
          path='/world_clock/:homeDate'
        />
        <Route
          element={
            <RequireAuth>
              <Clock />
            </RequireAuth>
          }
          path='/clock'
        />
        <Route
          element={
            <RequireAuth>
              <Test />
            </RequireAuth>
          }
          path='/test'
        />
        <Route element={<NotFound />} path='*' />
      </Routes>
    </AuthProvider>
  );
};
