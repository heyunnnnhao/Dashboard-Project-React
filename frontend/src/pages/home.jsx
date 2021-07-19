import { Link } from 'react-router-dom';
import '../style/css/home.scoped.css';

function Home() {
  return (
    <>
      <nav className="top_nav">
        <span id="navs" className="navs">
          <a className="top_nav_item" href="https://github.com/heyunnnnhao" target="_blank" rel="noreferrer">
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
    </>
  );
}

export default Home;
