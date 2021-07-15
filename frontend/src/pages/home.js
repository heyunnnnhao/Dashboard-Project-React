import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../style/css/home.css';
import CountDown from './count_down';
import Clock from './clock';

function App() {
  return (
    <Router>
      <ul className="top_nav">
        <li>
          <Link className="top_nav_item" to="/clock">
            Clock
          </Link>
        </li>
        <li>
          <Link className="top_nav_item" to="/count_down">
            Count Down
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path="/count_down" component={CountDown} />
        <Route path="/clock" component={Clock} />
      </Switch>
    </Router>
  );
}

export default App;
