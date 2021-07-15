import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../style/css/home.css';
import arrow from '../assets/arrow.svg';

import CountDown from './count_down';
import Clock from './clock';

function App() {
  function hide() {
    let arrowid = document.getElementById('arrow');
    let nav_item = document.getElementById('navs');
    nav_item.classList.toggle('disappear');
    arrowid.classList.toggle('arrow_animation');
  }

  return (
    <Router>
      <nav className="top_nav">
        <span id="navs" className="navs">
          <a className="top_nav_item" href="https://github.com/heyunnnnhao" target="_blank">
            My GitHub
          </a>
          <Link className="top_nav_item" to="/clock">
            Clock
          </Link>
          <Link className="top_nav_item" to="/count_down">
            Count Down
          </Link>
        </span>
        <span>
          <img src={arrow} className="arrow" alt="arrow" id="arrow" onClick={hide} />
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
