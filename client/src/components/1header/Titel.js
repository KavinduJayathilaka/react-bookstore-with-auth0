import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./headerStyle.css";

class Titel extends Component {
  render() {
    return (
      <div className="Titel">
        <Link to={"/test"}>Test LInk</Link>
        Book<b>Shelter</b>
      </div>
    );
  }
}

export default Titel;
