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
        <nav class="navbar navbar-expand-lg navbar-light bg-primary myNav">
          <a class="navbar-brand" href="#">
            The Navbar Component
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
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
