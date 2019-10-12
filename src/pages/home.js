import React, { Component } from "react";
import Axios from "axios";

import Navbar from "../components/Navbar";
import NewsComp from "../components/NewsComp";

import "./index.css";

let axiosconfig = {};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { user: "", loggedin: false };
  }

  componentDidMount() {
    const token = window.localStorage.getItem("token");
    if (token) {
      axiosconfig = {
        headers: {
          Authorization: "JWT " + token
        }
      };

      let url = "https://mainapu.herokuapp.com/current";

      Axios.get(url, axiosconfig).then(response => {
        const { data } = response;
        this.setState({ user: data.username, loggedin: true });
      });
    }
  }

  render() {
    const { user, loggedin } = this.state;
    return (
      <div>
        <Navbar></Navbar>
        <div>
          {loggedin ? <div>Hello {user}</div> : null}
          <NewsComp company="apple" />
        </div>
      </div>
    );
  }
}

export default Home;
