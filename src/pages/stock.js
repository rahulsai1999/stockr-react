import React from "react";

import Navbar from "../components/Navbar";
import CGraph from "../components/CGraph";

const Stock = props => {
  const { match } = props;
  const { params } = match;

  return (
    <div>
      <Navbar />
      <CGraph ticker={params.id}></CGraph>
    </div>
  );
};

export default Stock;
