import React, { Component } from "react";
import Axios from "axios";
import qs from "querystring";
import cogotoast from "cogo-toast";
import _ from "lodash";

import "./index.css";

let axiosconfig = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "*/*"
  }
};

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      name: "",
      dob: "",
      username: "",
      password: ""
    };
  }

  onChangeUserName = event => {
    this.setState({ username: event.target.value });
  };
  onChangePassword = event => {
    this.setState({ password: event.target.value });
  };
  onChangeName = event => {
    this.setState({ name: event.target.value });
  };
  onChangeDob = event => {
    this.setState({ dob: event.target.value });
  };
  onChangeEmail = event => {
    this.setState({ email: event.target.value });
  };

  onSignup = () => {
    let credentials = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      name: this.state.name,
      dob: this.state.dob
    };

    let url = "https://mainapu.herokuapp.com/register";

    Axios.post(url, qs.stringify(credentials), axiosconfig).then(response => {
      if (_.has(response.data, "error"))
        cogotoast.error("Invalid Credentials", { position: "top-center" });
      else {
        cogotoast
          .loading("Registering", { position: "top-center" })
          .then(() => {
            cogotoast.success("User Registered", { position: "top-center" });
          });
        setTimeout(() => {
          window.location.assign("/login");
        }, 4000);
      }
    });
  };

  render() {
    return (
      <div className="login-container">
        <div className="login-container-c">
          <h1>Signup</h1>
          <input
            type="text"
            autoComplete="off"
            className="login-form-element"
            name="Name"
            placeholder="Name"
            onChange={this.onChangeName}
          ></input>
          <input
            type="email"
            autoComplete="off"
            className="login-form-element"
            name="Email"
            placeholder="E-mail ID"
            onChange={this.onChangeEmail}
          ></input>
          <input
            type="text"
            autoComplete="off"
            className="login-form-element"
            name="username"
            placeholder="Username"
            onChange={this.onChangeUserName}
          ></input>
          <input
            type="date"
            autoComplete="off"
            className="login-form-element"
            name="DOB"
            placeholder="Date of Birth"
            onChange={this.onChangeDob}
          ></input>
          <input
            type="password"
            name="password"
            className="login-form-element"
            placeholder="Password"
            onChange={this.onChangePassword}
          ></input>
          <button className="signup-button" onClick={this.onSignup}>
            Signup
          </button>
          <br />
          <br />
          <h4>
            Already have an Account?{" "}
            <a class="form-links" href="/login">
              Login
            </a>
          </h4>
        </div>
      </div>
    );
  }
}

export default Signup;
