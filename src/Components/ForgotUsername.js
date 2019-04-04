import React, { Component } from "react";

class forgotUser extends Component {
  state = {
    userEmail: "",
    securityQue: "Who was your first girlfriend?"
  };

  // /* UserName and password textbox handling*/
  // handleChange = e => {
  //   this.setState({ [e.target.userEmail]: e.target.userEmail });

  // };
  retriveForgotUserName = userName => {
    //send request to security to validate user
    console.log("Inside retrive method");
    fetch("http://localhost:8090/securityQuestions", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify({
        userEmail: this.state.userEmail,
        securityQue: "You Submitted your email successfuly"
      })
    })
      .then(res => {
        return res;
      })
      .then(() => {
        alert("Your UserName has been send to given Email");
        this.props.switchView("LoginView");
      })
      .catch(error => console.error("Error", error));
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      // <form method="POST">
      <div>
        <div>
          <label>Enter your Email attached with this account : &nbsp; </label>
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

      // </form>
    );
  }
}
export default forgotUser;
