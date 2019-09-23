import React, { Component } from "react";
import Axios from "axios";

class Autocom extends Component {
  constructor(props) {
    super(props);
    this.state = { api: {}, loading: true };
  }

  onChangeText = event => {
    let url =
      "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=";
    let cred = "&apikey=T69K620H31T06293";
    Axios.get(url + event.target.value + cred)
      .then(response => {
        const { data } = response;
        console.log(data);
        this.setState({ api: data });
        this.setState({ loading: false });
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    const { api, loading } = this.state;
    const { bestMatches } = api;
    return (
      <div>
        <input
          placeholder="Enter Search Query"
          onChange={this.onChangeText}
        ></input>
        <div>
          {!loading
            ? bestMatches.forEach(element => {
                return (
                  <>
                    <div>{element["1. symbol"]}</div>
                    <div>{element["2. name"]}</div>
                  </>
                );
              })
            : null}
        </div>
      </div>
    );
  }
}

export default Autocom;
