import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./Footer.css";
import Header from "./Header";
import Contact from "./Contact";
import FormBasic from "./FormBasic";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer>
        <div className=" col-sm-4 col-md  col-12 col">
          <h5 className="headin5_amrc col_white_amrc pt2">Follow us</h5>
        </div>

        <div className="container">
          <ul className="foote_bottom_ul_amrc">
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
          {/*<!--foote_bottom_ul_amrc ends here-->*/}
          <p className="text-center">@2019 | Eric Lucero</p>
          <Switch>
          <Route exact path="/" component={Header} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Header" component={FormBasic} />
        </Switch>
        </div>
      </footer>
      
    );
  }
}

export default Footer;
