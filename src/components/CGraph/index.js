import React, { useState, useEffect } from "react";
import Axios from "axios";
import Chart from "react-apexcharts";

import "./index.css";

let ohlc = [];
let temp = [];

const CGraph = props => {
  const [Ohlc, setOhlc] = useState([]);
  const [loading, setLoading] = useState(true);
  const options = {
    chart: {
      type: "candlestick"
    }
  };

  useEffect(() => {
    const { ticker } = props;
    Axios.get(
      "https://cloud.iexapis.com/stable/stock/" +
        ticker +
        "/chart/1m?token=pk_81aaf60aa7124180bdccd393bd02c7ad"
    ).then(response => {
      const { data } = response;
      data.forEach(element => {
        temp = {};
        temp.x = element.date;
        temp.y = [element.open, element.high, element.low, element.close];
        ohlc.push(temp);
      });
      setOhlc(ohlc);
      setLoading(false);
    });
  }, [props]);

  return (
    <div className="container">
      {loading ? (
        <Button type="danger" shape="circle" loading />
      ) : (
        <div>
          <Chart
            options={options}
            series={[{ data: Ohlc }]}
            type="candlestick"
            width={900}
          />
        </div>
      )}
    </div>
  );
};

export default CGraph;
