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
    <div className="navbar-custom">
      <div className="left-section-custom">
        <a className="nav-link-custom" href="/">
          Home
        </a>
        <a className="nav-link-custom" href="/news">
          News
        </a>
        <a className="nav-link-custom" href="/stocks">
          Stocks
        </a>
      </div>
      <a className="nav-link-custom-center" href="/">
        <h2>Stockr</h2>
      </a>
      <div className="right-section-custom">
        {username ? (
          <>
            <div class="dropdown-custom">
              <button class="dropbtn-custom">{username}</button>
              <div class="dropdown-content-custom">
                <a href="/account">Account</a>
                <a onClick={onlogout}>Logout</a>
              </div>
            </div>
          </>
        ) : (
          <>
            <a className="nav-link-custom btn-green" href="/login">
              Login
            </a>
            <a className="nav-link-custom btn-violet" href="/signup">
              Signup
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
