import React from "react";
import "./App.css";
import CGraph from "./components/CGraph";

function App() {
  return (
    <div className="App">
      <CGraph ticker="MSFT"></CGraph>
    </div>
  );
}

export default App;
