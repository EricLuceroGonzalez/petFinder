import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import FormBasic from "./Components/FormBasic";
import Header from "./Components/Header";
import Contact from "./Components/Contact";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary myNav">
          <Link to={"/"} className="nav-link">
            <span className="navbar-brand">The Navbar Component</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li>
                <Link to={"/"} className="nav-link">
                  {" "}
                  Home{" "}
                </Link>
              </li>
              <li>
                <Link to={"/Contact"} className="nav-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link to={"/Header"} className="nav-link">
                  Form
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route exact path="/" component={Header} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Header" component={FormBasic} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
