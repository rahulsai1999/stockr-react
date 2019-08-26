import React, { Component } from "react";
import Axios from "axios";
import qs from "querystring";
import _ from "lodash";

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
      console.log(response.data);
      _.has(response.data, "error")
        ? this.setState({ message: "Invalid Credentials" })
        : window.localStorage.setItem("token", response.data.token);
      this.setState({ message: "Logged In" });
    });
  };

  render() {
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
          <div onClick={this.onLogin}>Login</div>
          <br></br>
          <div>{this.state.message}</div>
        </form>
      </div>
    );
  }
}

export default Login;
