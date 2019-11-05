import React, { Component } from "react";
import Axios from "axios";
import _ from "lodash";
import cogotoast from "cogo-toast";
import "./index.css";

const addStock = ticker => {
  const token = window.localStorage.getItem("token");
  const url =
    "https://mainapu.herokuapp.com/stock/add?user=" +
    token +
    "&ticker=" +
    ticker;

  Axios.get(url).then(response => {
    console.log(response);
    cogotoast
      .loading("Adding " + ticker, { position: "top-right" })
      .then(() => {
        cogotoast.success("Redirecting ", { position: "top-right" });
        setTimeout(() => {
          window.location.assign("/");
        }, 2000);
      });
  });
};

class Autocom extends Component {
  constructor(props) {
    super(props);
    this.state = { api: {}, loading: true };
  }

  onChangeText = event => {
    if (event.target.value != "" && event.target.value.length > 4) {
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
          style={{ marginLeft: 130 }}
          placeholder="Enter Search Query"
          onChange={this.onChangeText}
        ></input>
        <div className="container">
          <div className="row mt-4 justify-content-center">
            {!loading ? (
              <div className="card-deck">
                {bestMatches.map(element => {
                  return (
                    <div
                      className="card bg-dark text-white text-center"
                      style={{ minWidth: 250 }}
                    >
                      <div className="card-body">
                        <h5 className="card-title">{element["1. symbol"]}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                          {element["2. name"]}
                        </h6>
                        <p className="card-text">{element["3. type"]}</p>
                        <p className="card-text">{element["4. region"]}</p>
                        <a
                          href={"/stock/" + element["1. symbol"]}
                          className="btn btn-info text-white"
                        >
                          View
                        </a>
                        &nbsp;&nbsp;
                        <a
                          className="btn btn-success text-white"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            addStock(element["1. symbol"]);
                          }}
                        >
                          Add Stock
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Autocom;
