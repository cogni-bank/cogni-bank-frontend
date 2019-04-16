import React, { Component } from "react";

// API calls: User management.
const API_USER_MANAGEMENT_URL = "http://localhost:9000/users/management";
const GET_USER_NAME_MAPPING = "/getUserName";

export default class forgotUser extends Component {
  state = {
    userEmail: "",
    securityQue: "Who was your first girlfriend?",
    currentView: this.props.currentView
  };

  /*handling Forgot userName to send the corresponding email (user management - Notification Team's) */
  retriveForgotUserName = userName => {
    fetch(API_USER_MANAGEMENT_URL + GET_USER_NAME_MAPPING + "/" + this.state.userEmail, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        const {userName} = response;
        alert("This time we're provided you with user name. Next time we'll ask for your security question. Please have a note of your UserName: " + userName);
      })
      .catch(error => console.error("Error", error));
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <div>
          <label>Enter your Email Id (used for signing-up with Cogni-Bank) : &nbsp; </label>
          <input
            type="text"
            id="userEmail"
            name="userEmail"
            onChange={this.handleChange}
          />
        </div>
        <br />

        <button
          type="submit"
          id="submitEmail"
          onClick={() => this.retriveForgotUserName(this.state.userEmail)}
        >
          Submit
        </button>
      </div>
    );
  }
}