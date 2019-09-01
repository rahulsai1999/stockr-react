import React from "react";
import _ from "lodash";
import "./index.css";

const Navbar = props => {
  const username = window.localStorage.getItem("usernameStockR");

  return (
    <div className="navbar">
      <div className="left-section">
        <a className="nav-link" href="/">
          Home
        </a>
        <a className="nav-link" href="/news">
          News
        </a>
        <a className="nav-link" href="/stocks">
          Stocks
        </a>
      </div>
      <a className="nav-link-center" href="/">
        <h2>Stockr</h2>
      </a>
      <div className="right-section">
        {username ? (
          <>
            <a className="nav-link" href="/account">
              {username}
            </a>
          </>
        ) : (
          <>
            <a className="nav-link btn-green" href="/login">
              Login
            </a>
            <a className="nav-link btn-violet" href="/signup">
              Signup
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
