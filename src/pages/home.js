import React, { Component } from "react";
import Axios from "axios";
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

      let url = "http://localhost:5000/current";

      Axios.get(url, axiosconfig).then(response => {
        const { data } = response;
        this.setState({ user: data.username, loggedin: true });
      });
    }
  }

  onlogout = () => {
    window.localStorage.removeItem("token");
    this.setState({ loggedin: false });
  };

  render() {
    const { user, loggedin } = this.state;
    return (
      <div>
        <h3>Home Page</h3>
        {loggedin ? <div>Hello {user}</div> : null}
        <button onClick={this.onlogout}>Logout</button>
      </div>
    );
  }
}

export default Home;
