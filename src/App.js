import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/home";
import Stock from "./pages/stock";
import Login from "./pages/login";
import Signup from "./pages/signup";

import "./App.css";


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/stock/:id" component={Stock} />
      </Router>
    </div>
  );
}

export default App;
