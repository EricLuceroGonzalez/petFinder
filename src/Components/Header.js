import React, { Component } from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <header className="parallax">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>
                  {" "}
                  <span className="span-light">Find</span> my pet
                </h1>
              </div>
              <div className="col-md-12 text-center divWraper">
                <p className="lead">
                  Where the real traveler meets the real thing
                </p>
                
                <form className="justify-content-around theForm">
                <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Do you love your pet?"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <div class="input-group-append">
                  <button className='btn btn-danger'>
                  adas</button>
                </div>
              </div>

                </form>
                <div className="col-md-12">
                  <button type="button" className="btn btn-danger head-btn">
                    Lost
                  </button>
                  <button type="button" className="btn btn-success head-btn">
                    Found
                  </button>
                </div>
              </div>
            </div>
          </div>
          <i className="fa fa-arrow-circle-down arrow-Down" />
        </header>
      </div>
    );
  }
}

export default Header;
