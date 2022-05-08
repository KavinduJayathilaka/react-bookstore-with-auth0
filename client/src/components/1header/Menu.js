import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import "./headerStyle.css";

function Menu() {
  const auth = useSelector((state) => state.auth);

  const { user, isLogged } = auth;

  const handleLogout = async () => {
    try {
      await axios.get("/user/logout");
      localStorage.removeItem("firstLogin");
      window.location.href = "/";
    } catch (err) {
      window.location.href = "/";
    }
  };

  const userLink = () => {
    return (
      <li className="drop-nav">
        <Link to="#" className="avatar">
          <img src={user.avatar} alt="" /> {user.name}{" "}
          <i className="fas fa-angle-down"></i>
        </Link>
        <ul className="dropdown">
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/" onClick={handleLogout}>
              Logout
            </Link>
          </li>
        </ul>
      </li>
    );
  };

  const transForm = {
    transform: isLogged ? "translateY(-5px)" : 0,
  };

  return (
    <div className="cart">
      <ul style={transForm}>
        <li>
          {" "}
          <Link to={"/addProducts"}>
            <i className="fas fa-plus"></i>
            Add Product
          </Link>
        </li>
        <li>
          {" "}
          <Link to={"/"}>
            <i className="fas fa-shopping-cart"></i>
            cart
          </Link>
        </li>
        {isLogged ? (
          userLink()
        ) : (
          <li>
            <Link to="/login">
              <i className="fas fa-user"></i> Sign in
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Menu;
