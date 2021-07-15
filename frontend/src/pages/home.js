import { Link, useLocation } from 'react-router-dom';
import '../style/css/home.css';
import arrow from '../assets/arrow.svg';

export function Whoops() {
  let location = useLocation();
  let pathname = location.pathname.slice(location.pathname.indexOf('/')+1);
  console.log(location);
  return (
    <div>
      <span className="not_found">Location {pathname} not exist!</span>
    </div>
  );
}

function Home() {
  function hide() {
    let arrowid = document.getElementById('arrow');
    let nav_item = document.getElementById('navs');
    nav_item.classList.toggle('disappear');
    arrowid.classList.toggle('arrow_animation');
  }
  return (
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
  );
}

export default Home;
