import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../style/css/home.css';
import Clock from './clock';
import Time from './time';

function App() {
  return (
    <Router>
      <ul className="nav">
        <li>
          <Link className="navitem" to="/time">
            Time
          </Link>
        </li>
        <li>
          <Link className="navitem" to="/clock">
            Count Down
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path="/clock" component={Clock} />
        <Route path="/time" component={Time} />
      </Switch>
    </Router>
  );
}

export default App;
