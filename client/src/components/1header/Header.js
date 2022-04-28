import React, { Component } from "react";
import "./headerStyle.css";
import BrowseCategory from "./BrowseCategory";

import Titel from "./Titel";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import SearchBook from "../3main/search/SearchBook";

class Header extends Component {
  render() {
    return (
      <header>
        <BrowseCategory></BrowseCategory>
        <SearchBook></SearchBook>
        <Titel></Titel>
        <Menu></Menu>
      </header>
    );
  }
}

export default Header;
