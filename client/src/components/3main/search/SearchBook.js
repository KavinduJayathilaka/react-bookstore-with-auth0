import React, { Component } from "react";
import { Link } from "react-router-dom";
class SearchBook extends Component {
  render() {
    return (
      <div className="searcbox">
        <ul>
          <li>
            {" "}
            <Link to={"/searchResults"}>
              <i className="fa-magnifying-glass"></i>
              Search for More
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default SearchBook;
