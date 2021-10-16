import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { ReactComponent as ReactLogo } from '@assets/react-logo.svg';
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import './style.scss';
import { useAuth } from '@common/auth/auth';

import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

export default () => {
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

      {auth.user && locale == 'home' ? (
        <Button className='status' variant='outlined' onClick={() => setOpen(true)}>
          {auth.user}
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
