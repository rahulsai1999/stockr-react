import React, { Component, useState, useEffect } from "react";
import Axios from "axios";

import CGraph from "../CGraph";
const aritekey = "&client_id=2e2fbd86b906b31d3342b9686161637b01df05942e02";

const First = props => {
  const [companyInfo, setCInfo] = useState({});
  const [loading, setL] = useState(true);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    Axios.get(
      "https://cloud.iexapis.com/stable/stock/" +
        props.ticker +
        "/company?token=pk_81aaf60aa7124180bdccd393bd02c7ad"
    ).then(response => {
      setCInfo(response.data);
      setL(false);
      console.log(companyInfo);
    });
  }, []);

  const {
    companyName,
    exchange,
    website,
    description,
    sector,
    symbol
  } = companyInfo;

  return (
    <div className="container">
      {loading ? (
        <div style={{ color: "white" }}>Loading...</div>
      ) : (
        <div className="container-fluid" style={{ color: "white" }}>
          <div className="row">
            <div className="col-5">
              <h4>
                {companyName}&nbsp;({symbol})
              </h4>
            </div>
            <div className="col-4">
              <h5>{exchange}</h5>
            </div>
            <div className="col-3">
              <h5>{sector}</h5>
            </div>
            <div className="col-2">
              <div
                className="btn-green"
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                Show More
              </div>
            </div>
          </div>
          <br />
          <br />

          {toggle ? (
            <div className="row animated slideInRight">
              <div className="col-9">{description}</div>
              <div className="col-3">
                <img
                  height={200}
                  width={200}
                  src={
                    "https://api.ritekit.com/v1/images/logo?domain=" +
                    website +
                    aritekey
                  }
                />
              </div>
            </div>
          ) : null}

          <br />
          <br />
          <div className="row justify-content-center">
            <CGraph ticker={props.ticker}></CGraph>
          </div>
        </div>
      )}
      ;
    </div>
  );
};

export default First;
