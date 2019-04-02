import React, { Component } from "react";

class Login extends Component {
  state = {
    userName: "",
    password: ""
  };

  /* UserName and password textbox handling*/
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="Login">
        <div className="LoginForm">
          <form method="POST">
            <div>
              <label>Enter your User Name:</label>
              <input
                type="text"
                id="userName"
                name="userName"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>Enter your password: &nbsp;&nbsp;</label>

              <input
                type="text"
                id="password"
                name="password"
                onChange={this.handleChange}
              />
            </div>
            <div className="forUserAndSingIn">
              <span className="forgotUser">
                <a href="/" id="forgotUser">
                  Forgot User Name/ Password ?
                </a>
              </span>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button
                type="button"
                id="loginBtn"
                name="login"
                onClick={() => this.props.validaterUser(this.state)}
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="signUp">
          <button type="submit" id="signUp" name="signUp">
            New User? Sign Up
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
