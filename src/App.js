import React from "react";
import logo from "./logo.svg";
import './App.css';
import Navbar from "./Components/Navbar";
import FormBasic from "./Components/FormBasic";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container fancyBorder">
        <div className="row">
          <div className="col-md-6">
            <h1>Bla</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing, elit taciti dis
              suscipit sapien parturient ad, dapibus dictum netus sodales
              dictumst. Arcu ac dictumst cum elementum tristique augue erat
              tincidunt justo commodo, eleifend ullamcorper taciti mattis primis
              ad mi posuere nec cursus habitasse, placerat mauris risus auctor
              dapibus magna metus montes quam.
            </p>
          </div>
          <div className="col-md-6">
            <h1>Bla</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing, elit taciti dis
              suscipit sapien parturient ad, dapibus dictum netus sodales
              dictumst. Arcu ac dictumst cum elementum tristique augue erat
              tincidunt justo commodo, eleifend ullamcorper taciti mattis primis
              ad mi posuere nec cursus habitasse, placerat mauris risus auctor
              dapibus magna metus montes quam.
            </p>
          </div>
        </div>
        <FormBasic/>
      </div>
    </div>
  );
}

export default App;
