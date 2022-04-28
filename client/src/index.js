import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DataProvider from "./redux/store";
ReactDOM.render(
  <Router>
    <React.StrictMode>
      <DataProvider>
        <App />
      </DataProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
