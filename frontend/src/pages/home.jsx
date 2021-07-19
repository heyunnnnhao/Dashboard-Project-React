import { Link } from 'react-router-dom';
import '../style/css/home.scoped.css';

function Home() {
  function hide() {
    let arrowid = document.getElementById('arrow');
    let nav_item = document.getElementById('navs');
    nav_item.classList.toggle('disappear');
    arrowid.classList.toggle('arrow_animation');
  }
  return (
    <>
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
      </nav>
      <footer className="app_footer">&copy; Copyright 2021 Yunhao He</footer>
    </>
  );
}

export default Home;
