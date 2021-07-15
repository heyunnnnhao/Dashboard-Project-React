import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../style/css/home.css';
import arrow from '../assets/arrow.svg';

import CountDown from './count_down';
import Clock from './clock';

function App() {
  let arrowid = document.getElementById('arrow');
  let nav_item = document.getElementById('top_nav_item');

  function hideAll() {
    nav_item.classList.add('disappear');
  }
  function showAll() {
    nav_item.classList.remove('disappear');
  }

  return (
    <Router>
      <nav className="top_nav">
        <a className="top_nav_item" href="https://github.com/heyunnnnhao" target="_blank">
          My GitHub
        </a>
        <Link className="top_nav_item" to="/clock">
          Clock
        </Link>
        <Link className="top_nav_item" to="/count_down">
          Count Down
        </Link>
        <span >
          <img src={arrow} className="arrow" alt="arrow" id="arrow" />
        </span>
      </nav>

      <Switch>
        <Route path="/count_down" component={CountDown} />
        <Route path="/clock" component={Clock} />
      </Switch>
    </Router>
  );
}

export default App;
