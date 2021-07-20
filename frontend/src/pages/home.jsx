// import react
import { Link } from 'react-router-dom';
// import npm
// import style
import '@css/home.scoped.css';
// import assets
// import api
// import helper
import { getCurrentDate } from '@pages/common/common';
// import components




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
        <Link className="top_nav_item" to="/test">
          Test
        </Link>
      </span>
    </nav>
  );
};

export default Home;
