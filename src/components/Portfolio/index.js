import React, { useState, useEffect } from "react";
import Axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";
import cogotoast from "cogo-toast";

const rmStock = ticker => {
  const token = window.localStorage.getItem("token");
  const url =
    "https://mainapu.herokuapp.com/stock/remove?user=" +
    token +
    "&ticker=" +
    ticker;

  Axios.get(url).then(response => {
    console.log(response);
    cogotoast
      .loading("Removing " + ticker, { position: "top-right" })
      .then(() => {
        cogotoast.success("Redirecting ", { position: "top-right" });
        setTimeout(() => {
          window.location.assign("/");
        }, 2000);
      });
  });
};

const Portfolio = props => {
  const username = window.localStorage.getItem("usernameStockR");
  const token = window.localStorage.getItem("token");
  const url = "https://mainapu.herokuapp.com/current";
  const axiosconfig = {
    headers: {
      Authorization: "JWT " + token
    }
  };

  const [user, setUser] = useState([]);
  const [loading, setL] = useState(true);

  useEffect(() => {
    Axios.get(url, axiosconfig).then(response => {
      const { data } = response;
      const { stocks } = data;
      setUser(stocks);
      setL(false);
    });
  }, []);

  return (
    <div className="container">
      {loading ? (
        <BeatLoader />
      ) : (
        <>
          <div className="card-deck">
            {user.map(stock => {
              return (
                <div
                  className="card bg-dark text-white text-center"
                  style={{ width: 200 }}
                >
                  <div className="card-body">
                    <div className="card-title">
                      <h4>{stock}</h4>
                    </div>
                    <a
                      href={"/stock/" + stock}
                      className="btn btn-success text-white"
                    >
                      View
                    </a>
                    &nbsp;&nbsp;
                    <a
                      className="btn btn-danger text-white"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        rmStock(stock);
                      }}
                    >
                      Delete
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Portfolio;
