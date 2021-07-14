import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../style/css/home.css';
import Clock from './clock';
import Test from './test';

function App() {
  return (
    <Router>
      <ul className="nav">
        <li>
          <Link className="navitem" to="/test">
            Test
          </Link>
        </li>
        <li>
          <Link className="navitem" to="/clock">
            Clock
          </Link>
        </li>
      </ul>

      <Switch>
        <Route path="/clock" component={Clock} />
        <Route path="/test" component={Test} />
      </Switch>
    </Router>
  );
}

export default App;
