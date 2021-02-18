
import './App.css';


 

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Signup from './components/signup/signup'
import './components/login/login.css'
import Login from './components/login/login'
import Dashboard from './components/dashboard/dashboard'
import Reddit from './components/reddit/reddit'
import Redit from './components/Redit/redit'

function App() {
  return (
    <div>

{/* <Signup />
<Login />
<Dashboard /> */}

{/* <Reddit /> */}

{/* <Redit /> */}



<Router>

<nav>
  <ol>
    <li>
      <Link to="/">login</Link>
    </li>
    <li>
      <Link to="/signup">Signup</Link>
    </li>
    <li>
      <Link to="/dashboard">Dashboard</Link>
    </li>
    <li>
      <Link to="/reddit">Reddit</Link>
    </li>
  </ol>
</nav>


 <Switch>


  <Route exact={true} path="/">
    <Login />
  </Route>


  <Route path="/dashboard">
    <Dashboard />
  </Route>


  <Route path="/signup">
    <Signup />
  </Route>
  
  <Route path="/reddit">
    <Reddit />
  </Route>



  

</Switch> 

</Router>

<Redit />



    </div>
  );
}

export default App;
