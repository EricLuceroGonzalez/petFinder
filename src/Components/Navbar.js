import React from "react";
import "./navBar.css";

// Create each nav-item of li
const NavItem = props => {
  // check element
  const pageURI = window.location.pathname + window.location.search;
  /// check if Active
  const liClassName = props.path === pageURI ? "nav-item active" : "nav-item";
  return (
    <li className={liClassName}>
      <a href={props.path} className="nav-link">
        {props.name}
        {props.path === pageURI ? (
          <span className="sr-only">(current)</span>
        ) : (
          ""
        )}
      </a>
    </li>
  );
};

class Navbar extends React.Component {
  render() {
    return (
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
            <NavItem path="/" name="Home" />
            <NavItem path="/page2" name="Page2" />
            <NavItem path="/page3" name="Page3" />
            <NavItem path="/page4" name="Page4" />
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
