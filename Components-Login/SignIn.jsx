import React, { Component } from 'react';
import SignUp from './SignUp.jsx' ;
import {BrowserRouter, Route, Switch, Link, Redirect} from 'react-router-dom';
import axios from 'axios';

class SignIn  extends Component {
    constructor(props) {
      super(props);
      this.signIn = this.signIn.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.state = {
        email: '',
        password: ''
      };
    }
    
    signIn(){
    var that = this ;
    axios.post('/tasks/signin', {
      email: this.state.email,
      password: this.state.password,
      })
      .then(response => {
        console.log(response);

        sessionStorage.setItem("LoggedIn",true);
        that.setState() ;
        // console.log(isLoggedIn);
      })
      .catch(error => {
        console.log(error);
        alert("Username or password is invalid !!!");
      });
    }
    

    handleEmailChange(e){
      this.setState({email:e.target.value})
    }
    handlePasswordChange(e){
      this.setState({password:e.target.value})
    }

    render() {
      const isLoggedIn = sessionStorage.getItem("LoggedIn");
      return (
        <div>
          {isLoggedIn ? < Redirect to={{pathname: '/dashboard'}}/>: (
            <div> 
              <form className="form-signin">
                <h2 className="form-signin-heading">Please sign in</h2>
                <label for="inputEmail" className="sr-only">Email address</label>
                <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required  />
                <label for="inputPassword" className="sr-only">Password</label>
                <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
                
                <button className="btn btn-lg btn-primary btn-block" onClick={this.signIn} type="button">Sign in</button>
              </form>
              <div>
                <Link to="/signup">{'Signup'}</Link>
              </div>
            </div>    
          )}
        </div>
      )
    }
}


export default SignIn ;
