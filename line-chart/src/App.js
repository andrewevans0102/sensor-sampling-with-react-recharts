import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Total from "./components/Total";
import Single from "./components/Single";

export default function App() {
  return (
    <Router>
      <div className="wrapper">
        <nav>
          <ul className="wrapper2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/single">Single</Link>
            </li>
            <li>
              <Link to="/total">Total</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/single">
            <Single />
          </Route>
          <Route path="/total">
            <Total />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
