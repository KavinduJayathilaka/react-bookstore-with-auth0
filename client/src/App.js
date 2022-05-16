import React, { Component, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  dispatchLogin,
  fetchUser,
  dispatchGetUser,
} from "./redux/actions/authAction";

import Header from "./components/1header/Header";
import SubHeader from "./components/1.5subHeader/Header";
import Carousel from "./components/2carousel/Carousel";
import Main from "./components/3main/Main";
import MainPages from "./components/4mainPages/Pages";

import axios from "axios";

import Footer from "rc-footer";
import "rc-footer/assets/index.css"; // import 'rc-footer/asssets/index.less';
import { render } from "react-dom";
import { DataProvider } from "./GlobalState";

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      const getToken = async () => {
        const res = await axios.post("/user/refresh_token", null);
        dispatch({ type: "GET_TOKEN", payload: res.data.access_token });
      };
      getToken();
    }
  }, [auth.isLogged, dispatch]);

  useEffect(() => {
    if (token) {
      const getUser = () => {
        dispatch(dispatchLogin());

        return fetchUser(token).then((res) => {
          dispatch(dispatchGetUser(res));
        });
      };
      getUser();
    }
  }, [token, dispatch]);

  return (
    <DataProvider>
      <Router>
        <div>
          <Header></Header>
          <SubHeader></SubHeader>
          <Carousel></Carousel>
          <MainPages></MainPages>
          <Main></Main>

          <Footer
            columns={[
              {
                icon: (
                  <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" />
                ),
                title: "BookShelter",
                url: "https://yuque.com",
                description: "All Rights Reserved",
                openExternal: true,
              },
            ]}
            bottom="Designed By Team CodeX"
          />
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
