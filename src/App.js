import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/home";
import Stock from "./pages/stock";
import News from "./pages/news";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Test from "./pages/test";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/news" component={News} />
        <Route path="/stock/:id" component={Stock} />
        <Route path="/test" component={Test} />
      </Router>
    </div>
  );
}

export default App;
