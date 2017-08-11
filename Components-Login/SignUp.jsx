import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import SignIn from './SignIn.jsx';
import axios from 'axios';
import style from ".././css/styles.css";

class SignUp extends Component{

    constructor(props) {
      super(props);
      this.signUp = this.signUp.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleNameChange = this.handleNameChange.bind(this);
      this.state = {
        email:'',
        password:'',
        name:''
      };
    }

    signUp(){

      axios.post('/tasks/signup', {
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
      .then(function (response) {
        console.log(response);
        window.location.href = '/';
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    handleEmailChange(e){
      this.setState({email:e.target.value})
    }

    handlePasswordChange(e){
      this.setState({password:e.target.value})
    }

    handleNameChange(e){
      this.setState({name:e.target.value})
    }

    render() {
      return (
        <div className = "signup_box">
          <form className="form-signup">
            <h2 className="form-signup-heading">Please sign up</h2>
            <div className ="signup_div">
            <label for="inputName" className="sr-only-signup">  Name   </label>&nbsp;&nbsp;
            <input type="name" onChange={this.handleNameChange} id="inputName" className="form-control-signup"  required />
            </div>
            <div className ="signup_div">
            <label for="inputEmail" className="sr-only-signup">  Email   </label>&nbsp;&nbsp;
            <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control-signup"  required />
            </div>
            <div className ="signup_div_pass">
            <label for="inputPassword" className="sr-only-signup">Password</label>&nbsp;&nbsp;
            <input type="password" onChange={this.handlePasswordChange} id="inputPassword_signup" className="form-control-signup" required />
            </div>
            <button className="btn btn-lg btn-primary btn-block button_signup" onClick={this.signUp} type="button">Sign up</button>
             <div className="link_signin">
            <Link  className= "linkcolour" to="/">{'Already have a account'}</Link>
          </div>
          </form>
         
        </div>
        
      )
    }
}

export default SignUp ;


