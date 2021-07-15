import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

import CountDown from './pages/count_down';
import Clock from './pages/clock';
import Home, { Whoops } from './pages/home';

function App() {
  return (
    <Router>
      <Link to="/">
        Main
      </Link>
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
