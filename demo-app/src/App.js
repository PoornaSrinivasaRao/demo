import React from "react"
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import HomePage from "./Homepage/Homepage";
import LoginNonAdmins from "./LoginNonAdmin/LoginNonAdmins";
import RegisterPage from "./RegisterPage/RegisterPage";
import LoginAdmins from "./LoginAdmins/LoginAdmins";
function App() {
  return (
    <div className="App">
     
      <Router >
         <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/register" component={RegisterPage} />
              <Route path="/loginNonAdmins" component={LoginNonAdmins} />
              <Route path="/loginAdmins" component={LoginAdmins} />
          </ Switch>
      </Router>
    </div>
  );
}
export default App;
