import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/home";
import Stock from "./pages/stock";

import "./App.css";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/stock/:id" component={Stock} />
      </Router>
    </div>
  );
}

export default App;
