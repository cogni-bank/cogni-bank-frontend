import React, { Component } from "react";
import "../style/login.css";

class Login extends Component {
  state = {
    userName: "",
    password: ""
  };

  /* UserName and password textbox handling*/
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = e => {
    e.preventDefault();
    this.props.validaterUser(this.state);
  };

  render() {
    return (
      <div className="Login">
        <p className="loginError">
          {this.props.error === undefined ? "" : this.props.error.message}
        </p>
        <div className="LoginForm">
          <form onSubmit={this.handleLogin}>
            <div>
              <label htmlFor="userName">Enter your User Name:</label>
              <input
                type="text"
                id="userName"
                name="userName"
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="password">
                Enter your password: &nbsp;&nbsp;
              </label>

              <input
                type="password"
                id="password"
                name="password"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="forUserAndSingIn">
              <span className="forgotUser">
                <a href="/" id="forgotUser">
                  Forgot User Name/ Password ?
                </a>
              </span>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button type="submit" id="loginBtn" name="login">
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="signUp">
          <button type="button" id="signUp" name="signUp">
            New User? Sign Up
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
