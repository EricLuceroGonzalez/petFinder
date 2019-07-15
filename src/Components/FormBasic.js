import React, { Component } from "react";
import "./formBasic.css";

class FormBasic extends React.Component {
  constructor() {
    super();
    this.state = {
      formControls: {
        name: {
          value: "",
          placeholder: "What is your name"
        },
        email: {
          value: "",
          placeholder: "What is your name"
        },
        password: {
          value: "",
          placeholder: "What is your name"
        }
      }
    };
  }

  changeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      formControls: {
        [name]: value
      }
    });
  };

  render() {
    return (
      <div>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          className="shit col-6"
          value={this.state.formControls.name.value}
          onChange={this.changeHandler}
        />
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          className="shit col-6"
          value={this.state.formControls.name.value}
          onChange={this.changeHandler}
        />
      </form>
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
          </div>
        </div>

      </div>
    </div>

    );
  }
}

export default FormBasic;
