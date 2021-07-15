import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import './style/css/app.css';

import CountDown from './pages/count_down';
import Clock from './pages/clock';
import Home, { Whoops } from './pages/home';

function App() {
  return (
    <Router>
      <header className="header">
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

      <footer className="footer">123456 Yunhao He</footer>
    </Router>
  );
}

export default App;
