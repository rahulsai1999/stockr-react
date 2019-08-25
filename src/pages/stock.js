import React from "react";
// import CGraph from "../components/CGraph";



const Stock = props => {
  const { match } = props;
  const { params } = match;

  return (
    <div>
      <h3>{params.id}</h3>
      {/* <CGraph ticker="MSFT"></CGraph> */}
    </div>
  );
};

export default Stock;
