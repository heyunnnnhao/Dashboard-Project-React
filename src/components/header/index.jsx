import { useState } from 'react';
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

function UserProfileDialog() {
  const [open, setOpen] = useState(false);
  let auth = useAuth();
  let navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {auth.user && (
        <Button variant='outlined' onClick={handleClickOpen}>
          {auth.user}
        </Button>
      )}
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Profie</DialogTitle>
        <List sx={{ pt: 0 }}>
          <ListItem
            autoFocus
            button
            onClick={() => {
              handleClose();
              auth.signout(() => navigate('/'));
            }}
          >
            <ListItemText primary='Log out' />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}

export default () => {
  let location = useLocation();
  return (
    <header className='app_header'>
      {location.pathname === '/' || location.pathname === '/home' ? (
        <ReactLogo className='logo' />
      ) : (
        <Link className='back' to='/home'>
          <ArrowBackIosSharpIcon />
        </Link>
      )}
      <UserProfileDialog />
    </header>
  );
};
