import React, { Component } from 'react';
import SignUp from './SignUp.jsx' ;
import {BrowserRouter, Route, Switch, Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import style from ".././css/styles.css";


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
        if(response.data == "Not logged in!")alert('User not found!!!');
        else{
        sessionStorage.setItem("LoggedIn",true);
        that.setState() ;
        }
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
        <div className = "imagePart">
          {isLoggedIn ? < Redirect to={{pathname: '/dashboard'}}/>: (
            <div className = "signinbox">    
            <h2 className = "heading-main">SUCCESSO</h2>
              <form className="form-signin">
                <h2 className="form-signin-heading">Please sign in</h2>
                <label for="inputEmail" className="userlogin">Email address</label><br></br>
                <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control-signin"required  /><br></br>
                <label for="inputPassword" className="userlogin">Password</label><br></br>
                <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control-signin" required /><br></br><br></br>
                <button className="btn btn-lg btn-primary btn-block button_signin" onClick={this.signIn} type="button">Sign in</button>
                 <div>
                <Link to="/signup">{'Not Yet Registered'}</Link>
              </div>
              </form>
             
            </div>     
          )}
        </div>
      )
    }
}


export default SignIn ;
