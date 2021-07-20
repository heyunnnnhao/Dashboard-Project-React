import { Link } from 'react-router-dom';
import '@css/home.scoped.css';

import { getCurrentDate } from './common/common';

const Home = () => {
  let homeDate = getCurrentDate('year', 'month', 'day');

  return (
    <nav className="top_nav">
      <span id="navs" className="navs">
        <a className="top_nav_item" href="https://github.com/heyunnnnhao" target="_blank" rel="noreferrer">
          My GitHub
        </a>
        <Link className="top_nav_item" to={`/clock/${homeDate}`}>
          Clock
        </Link>
        <Link className="top_nav_item" to={`/count_down/${homeDate}`}>
          Count Down
        </Link>
        <Link className="top_nav_item" to="/request">
          Request
        </Link>
      </span>
    </nav>
  );
};

export default Home;