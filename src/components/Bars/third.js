import React, { useState, useEffect } from "react";
import Axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";

const Third = props => {
  const [sData, setSData] = useState({});
  const [nData, setNData] = useState({});
  const [loading, setL] = useState(true);

  useEffect(() => {
    Axios.get("http://139.59.83.182:8000/stockpr/" + props.ticker).then(
      response => {
        setSData(response.data);
        console.log(sData);
      }
    );
    Axios.get("http://139.59.83.182:8000/nlp/" + props.ticker).then(
      response => {
        setNData(response.data);
        setL(false);
        console.log(nData);
      }
    );
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
          <div className="col-3 text-center">
            <div
              className="card text-white bg-success text-center"
              style={{ padding: 5 }}
            >
              Predicted Open: {parseFloat(sData["last"]).toFixed(3)}
            </div>
          </div>
          <div className="col-3 text-center">
            <div
              className="card text-white bg-danger text-center"
              style={{ padding: 5 }}
            >
              Predicted Close: {parseFloat(sData["next"]).toFixed(3)}
            </div>
          </div>
          <div className="col-3 text-center">
            <div
              className="card text-white bg-success text-center"
              style={{ padding: 5 }}
            >
              Positive Sentiment: {(parseFloat(nData["p"]) * 100).toFixed(0)} %
            </div>
          </div>
          <div className="col-3 text-center">
            <div
              className="card text-white bg-danger text-center"
              style={{ padding: 5 }}
            >
              Negative Sentiment: {(parseFloat(nData["n"]) * 100).toFixed(0)} %
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Third;
