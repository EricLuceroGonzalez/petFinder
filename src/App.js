import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import FormBasic from "./Components/FormBasic";
import Header from "./Components/Header";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="container fancyBorder col-md-6">
        <div className="row">
          <div className="para">
            <h1>Bla</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing, elit taciti dis
              suscipit sapien parturient ad, dapibus dictum netus sodales
              dictumst. Arcu ac dictumst cum elementum tristique augue erat
              tincidunt justo commodo, eleifend ullamcorper taciti mattis primis
              ad mi posuere nec cursus habitasse, placerat mauris risus auctor
              dapibus magna metus montes quam.
            </p>
            <FormBasic />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
