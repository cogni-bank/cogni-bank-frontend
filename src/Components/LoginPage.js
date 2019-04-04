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

  /* Function to handle the login and checking the input fields on login form*/
  handleLogin = e => {
    e.preventDefault();
    e.stopPropagation();
    const newState = JSON.parse(JSON.stringify(this.state));

    newState.formError = false;
    if (this.state.userName === "") {
      newState.userNameError = "Please fill the user name.";
      newState.formError = true;
    }

    if (this.state.password === "") {
      newState.passwordError = "Please fill the password.";
      newState.formError = true;
    } else if (
      this.state.password.length < 8 ||
      this.state.password.length > 32
    ) {
      newState.passwordError = "Please enter 8-32 characters.";
      newState.formError = true;
    }

    if (!newState.formError) {
      this.props.handleSubmitLogin(this.state);
    } else {
      this.setState(newState);
    }
  };

  /*Function to redirect to Sign up page for registration */
  handleSignUpClick = () => {
    this.props.switchView("registrationView");
  };

  render() {
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center text-white mb-4">
              Bootstrap 4 Login Form
            </h2>
            <div className="row">
              <div className="col-md-6 mx-auto">
                <div className="card rounded-0">
                  <div className="card-header">
                    <h3 className="mb-0">Login</h3>
                  </div>
                  {this.props.loginMessage ? (
                    <div className="alert alert-success alert-dismissible">
                      {this.props.loginMessage}
                    </div>
                  ) : (
                    ""
                  )}
                  {this.props.error ? (
                    <div className="alert alert-danger alert-dismissible">
                      {this.props.error.message}
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="card-body">
                    <form
                      onSubmit={this.handleLogin}
                      className={
                        this.state.formError ? "form was-validated" : "form"
                      }
                      autoComplete="off"
                      novalidate=""
                      id="formLogin"
                      role="form"
                    >
                      <div className="form-group">
                        <label htmlFor="userName">Username</label>
                        <input
                          type="text"
                          className="form-control form-control-lg rounded-0"
                          name="userName"
                          id="userName"
                          onChange={this.handleChange}
                          required
                        />
                        <div className="invalid-feedback">
                          {this.state.userNameError}
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          className="form-control form-control-lg rounded-0"
                          onChange={this.handleChange}
                          autoComplete="new-password"
                          name="password"
                          id="password"
                          minLength="8"
                          maxLength="32"
                          required
                        />
                        <div className="invalid-feedback">
                          {this.state.passwordError}
                        </div>
                      </div>

                      <button
                        type="button"
                        className="btn btn-primary btn-lg float-right"
                        onClick={this.handleSignUpClick}
                      >
                        Sign Up
                      </button>
                      <button
                        type="submit"
                        className="btn btn-success btn-lg float-left"
                        id="btnLogin"
                      >
                        Login
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    /*return (
      <div className="Login">
        
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
          <button
            type="button"
            id="signUp"
            name="signUp"
            onClick={this.handleSignUpClick}
          >
            New User? Sign Up
          </button>
        </div>
      </div>
    );*/
  }
}

export default Login;
