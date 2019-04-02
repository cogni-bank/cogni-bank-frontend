import React, { Component } from "react";
import UserOptionForm from "./UserOptionForm";
import OtpForm from "./OtpForm";

export default class Challenge extends Component {
  state = {
    selectedOption: "email",
    challengeCurrentView: "userOptionForm"
  };

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

  /*Passing the notification slection type to the Security team
   */
  sendChallenge = selectedOption => {
    const newState = JSON.parse(JSON.stringify(this.state));

    //send request to security to validate user
    fetch("http://localhost:8080/receivingEmailOrPhoneFromUI", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify({
        User: {
          optionType: selectedOption,
          value:
            "email" === selectedOption ? this.props.email : this.props.phone,
          userId: this.props.userId
        }
      })
    })
      .then(() => {
        newState.challengeCurrentView = "otpForm";
        super.setState(newState);
        console.log("The response sending to security", this.props.person);
      })
      .catch(error => console.error("Error", error));
  };

  sendOTP = otpCode => {
    //send request to security to validate user
    fetch("http://localhost:8080/validateUserWithOTP", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify({
        User: {
          otpCode: otpCode,
          userId: this.props.userId
        }
      })
    })
      .then(() => {
        this.props.switchView("accountView");
        //newState.currentView = "accountView";
        //super.setState(newState);
        //console.log("State from the challenge page", newState);
        console.log("App page current View", this.props.currentView);
      })
      .catch(error => console.error("Error", error));
  };

  render() {
    let tmpView = <UserOptionForm sendChallenge={this.sendChallenge} />;
    if (this.state.challengeCurrentView === "userOptionForm") {
      tmpView = (
        <UserOptionForm
          sendChallenge={this.sendChallenge}
          person={this.props.person}
          selectedOption={this.state.selectedOption}
          handleOptionChange={this.handleOptionChange}
        />
      );
    } else if (this.state.challengeCurrentView === "otpForm") {
      tmpView = <OtpForm />;
      //tmpView = <OtpTimer/>;
    }
    //console.log("State from the challenge page", newState);
    console.log("App page current View", this.props.currentView);
    return <div className="ChallengeForm">{tmpView}</div>;
  }
}
