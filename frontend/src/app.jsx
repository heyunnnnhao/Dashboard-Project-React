import { BrowserRouter as Router, Link, Routes, Route, useLocation } from 'react-router-dom';
import '@css/app.css';
import left from '@assets/left.svg';

import CountDown from '@pages/count_down';
import Clock from '@pages/clock';
import Home from '@pages/home';
import Request from '@pages/request';

const Whoops = () => {
  let location = useLocation();
  return (
    <div>
      <span className="not_found">
        Location <u>{location.pathname}</u> does not exist!
      </span>
    </div>
  );
};

const Header = () => {
  let location = useLocation();
  if (location.pathname === '/') {
    return (
      <header className="app_header_main">
        <Link className="logo" to="/">
          Main
        </Link>
      </header>
    );
  } else {
    return (
      <header className="app_header_modules ">
        <Link className="back" to="/">
          <img src={left} className="left" alt="left" />
        </Link>
      </header>
    );
  }
};

const Footer = () => {
  let location = useLocation();
  if (location.pathname === '/') {
    return <footer className="app_footer">&copy; Copyright 2021 Yunhao He</footer>;
  } else {
    return null;
  }
};

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/count_down/:homeDate">
          <CountDown />
        </Route>
        <Route path="/clock/:homeDate">
          <Clock />
        </Route>
        <Route path="/request">
          <Request />
        </Route>
        <Route path="*">
          <Whoops />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
