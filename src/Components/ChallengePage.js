import React, { Component } from "react";
import UserOptionForm from "./UserOptionForm";
import OtpForm from "./OtpForm";
import LogOut from "./LogOut";
import { Redirect } from "react-router-dom";

// API calls.
const API_URL = "http://localhost:8080";
const SEND_OTP_MAPPING = "/sendOtp";
const VALIDATE_OTP_MAPPING = "/validateUserWithOTP";

/*Challenge page has UserOptionForm and OtpForm as child components */
export default class Challenge extends Component {
  state = {
    selectedOption: "email",
    statusToHideOptForm: false,
    navToAccountsPage: ""
  };

  /*This function is called with respect to radio button handling in the userOption page */
  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

  /*This function, changes the view from OtpForm to loginView after timeout  */
  timeHandleChange = () => {
    console.log("inside handle");
    this.props.switchView("loginView");
  };

  /*Passing the user notification option type to the Security team, 
  will proceed based on the security team response */
  sendChallenge = selectedOption => {
    const newState = JSON.parse(JSON.stringify(this.state));
    fetch(API_URL + SEND_OTP_MAPPING, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify({
        type: selectedOption,
        userId: this.props.person.userId
      })
    })
      .then(response => {
        console.log(
          "Response for SEND_OTP_MAPPING returned from the security api:",
          response
        );
        newState.statusToHideOptForm = true;
        super.setState(newState);
        console.log("props person:", this.props.person);
      })
      .catch(error => console.error("Error", error));
  };

  // Send the user entered otp to security api and check the response string and switch the page based on that.
  sendOTP = otpCode => {
    //send request to security to validate user entered OTP.
    fetch(API_URL + VALIDATE_OTP_MAPPING, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      //credentials: "same-origin", //"include",
      body: JSON.stringify({
        code: otpCode,
        userId: this.props.person.userId
      })
    })
      .then(response => {
        if (response.ok) {
          console.log(
            "Response for VALIDATE_OTP_MAPPING returned from the security api:",
            response
          );
          return response;
        } else if (response.status === 401 || response.status === 404) {
          throw new Error("OTP Code is wrong");
        } else {
          throw new Error("Unknown error happened!");
        }
      })
      .then(response => {
        response.headers.forEach(function(val, key) {
          console.log(key + " -> " + val);
        });
      })
      .then(response => {
        // to do
        // add routing
        this.setState({ navToAccountsPage: "accountDashboard" });
      })
      .catch(error => {
        console.error("Error", error);
        super.setState({ error });
      });
  };

  render() {
    let tmpView;
    if (this.state.statusToHideOptForm) {
      tmpView = (
        <OtpForm
          sendOTP={this.sendOTP}
          timeHandleChange={this.timeHandleChange}
          error={this.state.error}
        />
      );
    }

    if (this.state.navToAccountsPage === "accountDashboard") {
      return <Redirect to="/accountDashboard" />;
    }

    return (
      <div className="ChallengeForm">
        <UserOptionForm
          sendChallenge={this.sendChallenge}
          person={this.props.person}
          selectedOption={this.state.selectedOption}
          handleOptionChange={this.handleOptionChange}
        />
        {tmpView}
        <LogOut logOut={this.props.switchView} />
      </div>
    );
  }
}
