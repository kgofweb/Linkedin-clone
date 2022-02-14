import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
import Login from './components/login/Login'
import Home from "./components/home/Home";
import Header from "./components/header/Header";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route path='/home'>
            <Home />
            <Header />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
