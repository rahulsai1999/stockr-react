import React, { Component } from "react";
import Axios from "axios";
import _ from "lodash";
import "./index.css";

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
        <div className="container">
          <div className="row mt-4 justify-content-center">
            {!loading
              ? bestMatches.map(element => {
                  return (
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{element["1. symbol"]}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                          {element["2. name"]}
                        </h6>
                        <p className="card-text">{element["3. type"]}</p>
                        <p className="card-text">{element["4. region"]}</p>
                        <a
                          href={"/stock/" + element["1. symbol"]}
                          className="card-link"
                        >
                          View More
                        </a>
                        <a
                          href={"/stock/" + element["1. symbol"]}
                          className="card-link"
                        >
                          Add Stock
                        </a>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Autocom;
