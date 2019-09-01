import React from "react";
import CGraph from "../components/CGraph";
import Navbar from "../components/Navbar";

const Stock = props => {
  const { match } = props;
  const { params } = match;

  return (
    <div>
      <Navbar></Navbar>
      <CGraph ticker={params.id}></CGraph>
    </div>
  );
};

export default Stock;
