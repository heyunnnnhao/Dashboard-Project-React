// import react
import { HashRouter, BrowserRouter as Router, Link, Routes, Route, useLocation } from 'react-router-dom';
// import npm
import { GithubOutlined } from '@ant-design/icons';
// import style
import './app.scss';
// import assets
import left from '@assets/left.svg';
// import api
// import helper
// import components
import CountDown from '@pages/count_down';
import Clock from '@pages/clock';
import Home from '@pages/home';
import Test from '@pages/test';

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
  let github = (
    <a href="https://github.com/heyunnnnhao" target="_blank" rel="noreferrer">
      <GithubOutlined />
    </a>
  );
  if (location.pathname === '/') {
    return (
      <footer className="app_footer">
        &copy; Copyright 2021 Yunhao He &nbsp;
        {github}
      </footer>
    );
  } else {
    return null;
  }
};

const App = () => {
  return (
    // <HashRouter>
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
          <Route path="/test">
            <Test />
          </Route>
          <Route path="*">
            <Whoops />
          </Route>
        </Routes>
        <Footer />
      </Router>
    // /HashRouter>
  );
};

export default App;
