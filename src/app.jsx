import { BrowserRouter as Router, Link, Routes, Route, useLocation } from 'react-router-dom';
import './app.scss';
import left from './assets/left.svg';
import { CountDown, Clock, Home, Test } from './pages/index.ts';

const Whoops = () => {
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
  let location = useLocation();
  return (
    <header className='app_header'>
      <Link className='back' to='/'>
        {location.pathname === '/' ? 'Main' : <img src={left} className='logo' alt='left' />}
      </Link>
    </header>
  );
};

const Footer = () => {
  let location = useLocation();
  if (location.pathname === '/') {
    return <footer className='app_footer'>&copy; Copyright 2021 Yunhao He &nbsp;</footer>;
  } else {
    return null;
  }
};

export default () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/'>
          <Home />
        </Route>
        <Route path='/count_down/:homeDate'>
          <CountDown />
        </Route>
        <Route path='/clock/:homeDate'>
          <Clock />
        </Route>
        <Route path='/test'>
          <Test />
        </Route>
        <Route path='*'>
          <Whoops />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};
