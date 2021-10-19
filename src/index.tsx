import { StrictMode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/index';
import './index.scss';
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.min.css';
import { AuthProvider, RequireAuth, useAuth } from './common/auth/auth';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './common/style/theme';
import { ReactComponent as ReactLogo } from '@assets/react-logo.svg';
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

import { Home, NotFound, Login, CountDown, Clock, Test } from './pages/index';

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

const App = () => {
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
              <CountDown />
            </RequireAuth>
          }
          path='/count_down/:homeDate'
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

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);
