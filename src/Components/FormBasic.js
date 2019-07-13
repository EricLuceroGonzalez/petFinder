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
    );
  }
}

export default FormBasic;
