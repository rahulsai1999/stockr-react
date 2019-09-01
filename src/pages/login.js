import React, { Component } from "react";
import Axios from "axios";
import qs from "querystring";
import _ from "lodash";

import Button from "../components/Button";

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
    this.state = { username: "", password: "", message: "" };
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

    let url = "http://localhost:5000/login";

    Axios.post(url, qs.stringify(credentials), axiosconfig).then(response => {
      if (_.has(response.data, "error"))
        this.setState({ message: "Invalid Credentials" });
      else {
        window.localStorage.setItem("token", response.data.token);
        window.localStorage.setItem("usernameStockR", credentials.username);
        this.setState({ message: "Logged In" });
        window.location.assign("/");
      }
    });
  };

  render() {
    const { message } = this.state;
    return (
      <div>
        <h3>Login</h3>
        <form>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.onChangeUserName}
          ></input>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.onChangePassword}
          ></input>
          <Button onClick={this.onLogin}>Login</Button>
          <br></br>
          <div>{message}</div>
        </form>
      </div>
    );
  }
}

export default Login;
