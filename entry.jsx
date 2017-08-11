'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import SignIn from './Components-Login/SignIn.jsx';
import SignUp from './Components-Login/SignUp.jsx';
import Successo from './App.jsx';
import {combineReducers} from 'redux';
import * as reducers from './reducers';
import {Provider} from 'react-redux';
const reducer = combineReducers(reducers);
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {
  createStore,
  applyMiddleware,
} from 'redux';

let middleWare = [thunkMiddleware];
const loggerMiddleware = createLogger();
middleWare = [...middleWare, loggerMiddleware];

const store = createStore(
  reducer,
  applyMiddleware(...middleWare),
);


ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter >
        <Switch>
          <Route component={SignIn} exact path="/abc"></Route>
          <Route component={SignUp} path="/signup"></Route>
          <Route component={Successo} path="/"></Route>
        </Switch>
    </BrowserRouter>
  </Provider>  ,
document.getElementById('root'));