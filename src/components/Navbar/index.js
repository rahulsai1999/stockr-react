import React from "react";
import _ from "lodash";
import cogotoast from "cogo-toast";
import "./index.css";

const onlogout = () => {
  window.localStorage.removeItem("token");
  window.localStorage.removeItem("usernameStockR");
  cogotoast.loading("Logging out", { position: "top-right" }).then(() => {
    cogotoast.success("Redirecting ", { position: "top-right" });
  });
  setTimeout(() => {
    window.location.assign("/");
  }, 4000);
};

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
            <div class="dropdown">
              <button class="dropbtn">{username}</button>
              <div class="dropdown-content">
                <a href="/account">Account</a>
                <a onClick={onlogout}>Logout</a>
              </div>
            </div>
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
