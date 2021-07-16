import { BrowserRouter as Router, Link, Routes, Route, useLocation } from 'react-router-dom';
import './style/css/app.css';

import CountDown from './pages/count_down';
import Clock from './pages/clock';
import Home from './pages/home';

function Whoops() {
  let location = useLocation();
  let pathname = location.pathname.slice(location.pathname.indexOf('/') + 1);
  console.log(location);
  return (
    <div>
      <span className="not_found">Location <u>{pathname}</u> not exist!</span>
    </div>
  );
}

function App() {
  return (
    <Router>
      <header className="app_header">
        <Link className="logo" to="/">
          Main
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Whoops />} />
        <Route path="/count_down" element={<CountDown />} />
        <Route path="/clock" element={<Clock />} />
      </Routes>
    </Router>
  );
}

export default App;
