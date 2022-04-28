import React, { Component } from "react";
import Best from "./bestOf/Best";
import BookShelf from "./bookShelf/BookShelf";
import { Switch, Route, Router } from "react-router-dom";
import NotFound from "../utils/NotFound/NotFound";

import Login from "./auth/Login";
import Register from "./auth/Register";
import ActivationEmail from "./auth/ActivationEmail";
import ForgotPass from "./auth/ForgotPassword";
import ResetPass from "./auth/ResetPassword";
import Profile from "../3main/profile/Profile";
import EditUser from "../3main/profile/EditUser";
import SearchResults from "../3main/search/SearchResults";

import { useSelector } from "react-redux";

function Main() {
  const auth = useSelector((state) => state.auth);
  const { isLogged, isAdmin } = auth;
  return (
    <section>
      <Switch>
        <Route path="/" component={Home} exact />

        <Route path="/searchResults" component={SearchResults} exact />

        <Route path="/login" component={isLogged ? NotFound : Login} exact />
        <Route
          path="/register"
          component={isLogged ? NotFound : Register}
          exact
        />

        <Route
          path="/forgot_password"
          component={isLogged ? NotFound : ForgotPass}
          exact
        />
        <Route
          path="/user/reset/:token"
          component={isLogged ? NotFound : ResetPass}
          exact
        />

        <Route
          path="/user/activate/:activtion_token"
          component={ActivationEmail}
          exact
        />
        <Route
          path="/edit_user/:id"
          component={isAdmin ? EditUser : NotFound}
          exact
        />
        <Route
          path="/profile"
          component={isLogged ? Profile : NotFound}
          exact
        />
      </Switch>
    </section>
  );
}

export default Main;

function Home() {
  return (
    <div className="Main">
      <Best></Best>
      <BookShelf></BookShelf>
    </div>
  );
}
