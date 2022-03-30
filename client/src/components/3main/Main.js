import React, { Component } from "react";
import Best from "./bestOf/Best";
import BookShelf from "./bookShelf/BookShelf";
import { Switch, Route, Router } from "react-router-dom";

import Login from "./auth/Login";

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/test" component={TestPage} exact />
        <Route path="/login" component={Login} exact />
      </Switch>
    );
  }
}

export default Main;

function TestPage() {
  return (
    <div className="Main">
      <BookShelf></BookShelf>
    </div>
  );
}
function Home() {
  return (
    <div className="Main">
      <Best></Best>
      <BookShelf></BookShelf>
    </div>
  );
}
