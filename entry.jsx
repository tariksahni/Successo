'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import SignIn from './Components-Login/SignIn.jsx';
import SignUp from './Components-Login/SignUp.jsx';
import Successo from './App.jsx';
import {createStore, combineReducers} from 'redux';
import * as reducers from './reducers';
import {Provider} from 'react-redux';
const reducer = combineReducers(reducers);
const store = createStore(reducer);

// ReactDOM.render(
//   <Provider store={store} >
//     <Successo/>
//   </Provider>,
//   document.getElementById('root')
// );  


ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter >
      <div>
        <Switch>
          <Route component={SignIn} exact path="/"></Route>
          <Route component={SignUp} path="/signup"></Route>
          <Route component={Successo} path="/dashboard"></Route>
        </Switch>
      </div>  
    </BrowserRouter>
  </Provider>  ,
document.getElementById('root'));