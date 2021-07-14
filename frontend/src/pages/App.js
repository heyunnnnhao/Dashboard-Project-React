import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../style/css/App.css';
import Clock from './clock.js';
import Test from './test.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/clock" component={Clock} />
        <Route path="/test" component={Test} />
      </Switch>
    </Router>
  );
}

export default App;
