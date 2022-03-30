import React, { Component } from "react";
import "./headerStyle.css";
import { MdMenu } from "react-icons/lib/md";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <div className="cart">
        <ul>
          <li>
            {" "}
            <Link to={"/"}>
              <i className="fas fa-shopping-cart"></i>
              cart
            </Link>
          </li>
          <li>
            {" "}
            <Link to={"/login"}>
              <i className="fas fa-user"></i> Sign in
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
