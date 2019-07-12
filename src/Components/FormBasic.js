import React, { Component } from "react";

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
          type="email"
          name="email"
          value={this.state.formControls.email.value}
          onChange={this.changeHandler}
        />

        <input
          type="text"
          name="name"
          value={this.state.formControls.name.value}
          onChange={this.changeHandler}
        />

        <input
          type="password"
          name="password"
          value={this.state.formControls.password.value}
          onChange={this.changeHandler}
        />
      </form>
    );
  }
}

export default FormBasic;
