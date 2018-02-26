"use strict";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./Components-Login/SignIn.jsx";
import SignUp from "./Components-Login/SignUp.jsx";
import Successo from "./App.jsx";
import { combineReducers } from "redux";
import * as reducers from "./reducers";
import { Provider } from "react-redux";
const reducer = combineReducers(reducers); //eslint-disable-line
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";  //eslint-disable-line

let middleWare = [thunkMiddleware]; //eslint-disable-line
const loggerMiddleware = createLogger();
middleWare = [...middleWare, loggerMiddleware];
const store = createStore(
  reducer,
  applyMiddleware(...middleWare),
);
ReactDOM.render(
  <Provider store={store}>  
    <BrowserRouter> 
      <Switch>
        <Route component={SignIn} exact path="/" />
        <Route component={SignUp} path="/signup" />
        <Route component={Successo} path="/dashboard" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
