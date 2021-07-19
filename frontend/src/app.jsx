import { BrowserRouter as Router, Link, Routes, Route, useLocation } from 'react-router-dom';
import './style/css/app.css';
import left from './assets/left.svg';

import CountDown from './pages/count_down';
import Clock from './pages/clock';
import Home from './pages/home';

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
    return;
  }
}

function App() {
  return (
    <Router>
      {<Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/count_down" element={<CountDown />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="*" element={<Whoops />} />
      </Routes>
      {<Footer />}
    </Router>
  );
}

export default App;
