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

class Login extends Component {
  constructor() {
    super();
    this.state = { username: "", password: "" };
  }

  onChangeUserName = event => {
    this.setState({ username: event.target.value });
  };
  onChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  onLogin = () => {
    let credentials = {
      username: this.state.username,
      password: this.state.password
    };

    let url = "https://mainapu.herokuapp.com/login";

    Axios.post(url, qs.stringify(credentials), axiosconfig).then(response => {
      if (_.has(response.data, "error"))
        cogotoast.error("Invalid Credentials", { position: "top-center" });
      else {
        window.localStorage.setItem("token", response.data.token);
        window.localStorage.setItem("usernameStockR", credentials.username);
        cogotoast.loading("Logging in", { position: "top-center" }).then(() => {
          cogotoast.success("Logged In", { position: "top-center" });
        });
        setTimeout(() => {
          window.location.assign("/");
        }, 4000);
      }
    });
  };

  render() {
    return (
      <div className="login-container">
        <div className="login-container-c">
          <h1>Login</h1>
          <input
            type="text"
            autoComplete="off"
            className="login-form-element"
            name="username"
            placeholder="Username"
            onChange={this.onChangeUserName}
          ></input>
          <input
            type="password"
            name="password"
            className="login-form-element"
            placeholder="Password"
            onChange={this.onChangePassword}
          ></input>
          <button className="login-button" onClick={this.onLogin}>
            Login
          </button>
          <br></br>
        </div>
      </div>
    );
  }
}

export default Login;
