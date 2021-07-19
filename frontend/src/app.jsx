import { BrowserRouter as Router, Link, Routes, Route, useLocation } from 'react-router-dom';
import '@css/app.css';
import left from '@assets/left.svg';

import CountDown from '@pages/count_down';
import Clock from '@pages/clock';
import Home from '@pages/home';
import Request from '@pages/request';

function Whoops() {
  let location = useLocation();
  return (
    <div>
      <span className="not_found">
        Location <u>{location.pathname}</u> does not exist!
      </span>
    </div>
  );
}

function Header() {
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
}

function Footer() {
  let location = useLocation();
  if (location.pathname === '/') {
    return <footer className="app_footer">&copy; Copyright 2021 Yunhao He</footer>;
  } else {
    return null;
  }
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/count_down">
          <CountDown />
        </Route>
        <Route path="/clock/:day">
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
}

export default App;
