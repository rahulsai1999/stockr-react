import React, { useState, useEffect } from "react";
import Axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";

const Second = props => {
  const [sData, setSData] = useState({});
  const [loading, setL] = useState(true);

  useEffect(() => {
    Axios.get(
      "https://www.alphavantage.co/query?apikey=T69K620H31T06293&function=GLOBAL_QUOTE&symbol=" +
        props.ticker
    ).then(response => {
      setSData(response.data["Global Quote"]);
      setL(false);
      console.log(sData);
    });
  }, []);

  return (
    <>
      {loading ? (
        <BeatLoader
          loading={loading}
          size={20}
          sizeUnit={"px"}
          color={"#BD10E0"}
        />
      ) : (
        <>
          <div className="col-2">Open: {sData["02. open"]}</div>
          <div className="col-2">High: {sData["03. high"]}</div>
          <div className="col-2">Low: {sData["04. low"]}</div>
          <div className="col-2">Close: {sData["05. price"]}</div>
          <div className="col-2">Change: {sData["09. change"]}</div>
        </>
      )}
    </>
  );
};

export default Second;
