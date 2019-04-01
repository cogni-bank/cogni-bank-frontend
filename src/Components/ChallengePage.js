import React, { Component } from "react";
import UserOptionForm from "./UserOptionForm";
import OtpForm from "./OtpForm";

export default class Challenge extends Component {
  state = {
    selectedOption: "email",
    currentView: "userOptionForm"
  };

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

  sendChallenge = selectedOption => {
    console.log("selectedOption", selectedOption);
    const newState = JSON.parse(JSON.stringify(this.state));

    //send request to security to validate user
    fetch("http://localhost:8080/receivingEmailOrPhoneFromUI", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify({
        userChoice: {
          optionType: selectedOption,
          value:
            "email" === selectedOption ? this.props.email : this.props.phone,
          userName: this.props.userName
        }
      })
    })
      .then(() => {
        newState.currentView = "otpForm";
        super.setState(newState);
      })
      .catch(error => console.error("Error", error));
  };

  render() {
    let tmpView = <UserOptionForm sendChallenge={this.sendChallenge} />;
    if (this.state.currentView === "userOptionForm") {
      tmpView = (
        <UserOptionForm
          sendChallenge={this.sendChallenge}
          person={this.props.person}
          selectedOption={this.state.selectedOption}
          handleOptionChange={this.handleOptionChange}
        />
      );
    } else if (this.state.currentView === "otpForm") {
      tmpView = <OtpForm />;
    }

    return <div className="ChallengeForm">{tmpView}</div>;
  }
}
