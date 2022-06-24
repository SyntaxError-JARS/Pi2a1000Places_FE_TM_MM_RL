import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

const Nav = (props) => {
  return (
    <div className="nav-strip">
      <Link to={"/home"} className="nav-link">
        <div className="nav-link-style">
          <label className="nav-label">HOME</label>
        </div>
      </Link>
      <Link to={"/menu"} className="nav-link">
        <div className="nav-link-style">
          <label className="nav-label">MENU</label>
        </div>
      </Link>
      <Link to={"/SignIn"} className="nav-link" id="middle-link">
        <div className="nav-link-style">
          <label className="nav-label">LOG IN</label>
        </div>
      </Link>
      <Link to={"/signUp"} className="nav-link">
        <div className="nav-link-style">
          <label className="nav-label">ORDER NOW</label>
        </div>
      </Link>
      <Link to={"/creditcard"} className="nav-link">
        <div className="nav-link-style">
          <label className="nav-label">CREDIT PMT</label>
        </div>
      </Link>
      <Link to={"/payments"} className="nav-link">
        <div className="nav-link-style">
          <label className="nav-label">PAYMENTS</label>
        </div>
      </Link>
    </div>
  );
};
export default Nav;
