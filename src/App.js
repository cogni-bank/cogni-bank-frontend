import React, { Component } from "react";
import "./App.css";
import Login from "./Components/LoginPage";
import Challenge from "./Components/ChallengePage";
import AccountDetails from "./Components/AccountDetailspage";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: { userId: "", userName: "", phone: "", email: "" },
      currentView: "loginView"
    };
  }

  /*Takes a view and Changes the currentView in the state */
  switchView = view => {
    const newState = { ...this.state };
    newState.currentView = view;
    console.log("setting new state in app");
    console.log(newState);
    super.setState(newState);
  };

  /**
   *  this function passes the user details to the security team to validate the user.
   * Security team then pass the phone Number and email
   * */
  validaterUser = person => {
    console.log("persone", person);
    const newState = JSON.parse(JSON.stringify(this.state));

    //send request to security to validate user
    fetch("http://localhost:8080/loginUser", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify({
        userName: person.userName,
        password: person.password
      })
    })
      .then(res => {
        console.log("The res", res);

        if (res.ok) {
          return res.json();
        } else if (res.status === 401) {
          throw new Error("User name or password is wrong!");
        } else {
          throw new Error("Unknown error happened!");
        }
      })
      .then(response => {
        console.log("The response", response);

        const { userId, phone, email } = response;
        //const person = {userId, phone, email };

        newState.person.userId = userId;
        newState.person.phone = phone;
        newState.person.email = email;
        newState.person.userName = person.userName;
        newState.currentView = "challengeView";

        super.setState(newState);
      })
      .catch(error => {
        console.log("Error --->>>", error);

        super.setState({ error });
      });

    //Need to Complete later: if the response is bad(non authentic user) - navigate to login page with retry message
  };

  render() {
    let tmpView = <Login validaterUser={this.validaterUser} />;
    switch (this.state.currentView) {
      case "loginView":
        tmpView = (
          <Login validaterUser={this.validaterUser} error={this.state.error} />
        );
        break;

      case "challengeView":
        tmpView = (
          <Challenge
            currentView={this.state.currentView}
            person={this.state.person}
            switchView={this.switchView}
          />
        );
        break;

      case "accountView":
        tmpView = <AccountDetails person={this.state.person} />;
        break;

      default:
        tmpView = <Login validaterUser={this.validaterUser} />;
        break;
    }
    return (
      <div className="Main">
        <h1>Cogni-Bank</h1>
        {tmpView}
      </div>
    );
  }
}
