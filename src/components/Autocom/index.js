import React, { Component } from "react";
import Axios from "axios";
import _ from "lodash";

class Autocom extends Component {
  constructor(props) {
    super(props);
    this.state = { api: {}, loading: true };
  }

  onChangeText = event => {
    if (event.target.value != "" && event.target.value.length > 3) {
      let url =
        "https://www.alphavantage.co/query?apikey=T69K620H31T06293&function=SYMBOL_SEARCH&keywords=";
      Axios.get(url + event.target.value)
        .then(response => {
          const { data } = response;
          this.setState({ api: data });
          this.setState({ loading: false });
        })
        .catch(() => {
          this.setState({ loading: false });
        });
    }
  };

  render() {
    const { api, loading } = this.state;
    const { bestMatches } = api;
    console.log(bestMatches);
    return (
      <div>
        <input
          placeholder="Enter Search Query"
          onChange={this.onChangeText}
        ></input>
        <div>
          {!loading
            ? bestMatches.map(element => {
                return (
                  <>
                    <div style={{ color: "white" }}>
                      {element["1. symbol"]}&nbsp;
                      {element["2. name"]}
                    </div>
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
