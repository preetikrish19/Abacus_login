import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import SignUp2 from "./pages/signup2";
import SignUp from "./pages/SignUp";
import SignInForm from "./pages/SignInForm";
import { Typography } from "@material-ui/core";
import ForgotPassword from "./pages/ForgotPassword";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">
        <div className="App">
       {/*<div className="appAside" ><center><div className="typed-out">Welcome!</div></center></div>*/}
       <div className="appAside" >
         <center>
       <Typography>
       <div className="typing-demo" width="40%">
         <div className="glow">
            Welcome!
          </div>
          </div>
        </Typography>
        </center>
        </div>
          <div className="appForm">
            <div className="pageSwitcher">
              <NavLink to="/sign-in" activeClassName="pageSwitcherItem-active" className="pageSwitcherItem" >
                Sign In
              </NavLink>
              <NavLink exact to="/" activeClassName="pageSwitcherItem-active" className="pageSwitcherItem">
                Sign Up
              </NavLink>
            </div>

            <Route exact path="/" component={SignUp} />   {/* Signup form*/}
            <Route path="/sign-in" component={SignInForm} />
            <Route path="/ForgotPassword" component={ForgotPassword} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
