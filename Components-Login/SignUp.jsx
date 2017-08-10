import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import SignIn from './SignIn.jsx';
import axios from 'axios';


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
        <div>
          <form className="form-signin">
            <h2 className="form-signin-heading">Please sign up</h2>
            <label for="inputName" className="sr-only">Name</label>
            <input type="name" onChange={this.handleNameChange} id="inputName" className="form-control" placeholder="Name" required />
            <label for="inputEmail" className="sr-only">Email address</label>
            <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required />
            <label for="inputPassword" className="sr-only">Password</label>
            <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
            
            <button className="btn btn-lg btn-primary btn-block" onClick={this.signUp} type="button">Sign up</button>
          </form>
          <div>
            <Link to="/">{'SignIn'}</Link>
          </div>
        </div>
        
      )
    }
}

export default SignUp ;


