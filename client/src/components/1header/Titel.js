import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./headerStyle.css";

class Titel extends Component {
  render() {
    return (
      <div className="Titel">
        <Link to={"/"}>
          Book<b>Shelter</b>
        </Link>
      </div>
    );
  }
}

export default Titel;
