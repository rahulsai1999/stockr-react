import React from "react";

import Navbar from "../components/Navbar";
import First from "../components/Bars/first";

const Stock = props => {
  const { match } = props;
  const { params } = match;

  return (
    <div>
      <Navbar />
      <div className="container">
        <First ticker={params.id} />
      </div>
    </div>
  );
};

export default Stock;
