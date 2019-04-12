import React, { Component } from "react";
import "./App.css";
import Login from "./Components/Login/LoginPage";
import Challenge from "./Components/ChallengePage";
import AccountDetails from "./Components/AccountDetailspage";
import NavBar from "./Components/NavBar/NavBar";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import AccountDashboard from "./Components/Accounts/AccountDashboard";
import RegistrationPage from "./Components/RegistrationPage";
import ForgetPassword from "./Components/ForgotPassword";
import ForgetUsername from "./Components/ForgotUsername";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: { userId: "", userName: "", phone: "", email: "" },
      loginMessage: "",
      currentView: ""
    };
  }

  submitChange = newPerson => {
    console.log("seeking state-->" + newPerson.userId);
    const newState = { ...this.state };
    localStorage.setItem("userName", newPerson.userName);
    newState.person = newPerson;
    super.setState(newState);
  };

  switchViewFromNavBar = view => {
    const newState = { ...this.state };
    newState.currentView = view;
    console.log("setting new state in app");
    console.log(newState);
    super.setState(newState);
  };

  loginMessageFunction = message => {
    super.setState({ loginMessage: message });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          selectPage={this.switchViewFromNavBar}
          person={this.state.person.userName}
        />
        <div>
          <BrowserRouter>
            <Switch>
              <Route path="/accountDashboard" component={AccountDashboard} />

              <Route path="/AccountDetails" component={AccountDetails} />

              <Route
                path="/RegistrationPage"
                component={() => (
                  <RegistrationPage
                    loginMessage={this.loginMessageFunction}
                    currentView={this.state.currentView}
                  />
                )}
              />
              <Route
                exact
                path="/Login"
                component={() => (
                  <Login
                    loginMessage={this.state.loginMessage}
                    error={this.state.error}
                    submitState={this.submitChange}
                    person={this.state.person}
                    currentView={this.state.currentView}
                  />
                )}
              />
              <Route
                path="/ForgetPassword"
                component={() => (
                  <ForgetPassword currentView={this.state.currentView} />
                )}
              />
              <Route
                path="/ForgetUsername"
                component={() => (
                  <ForgetUsername currentView={this.state.currentView} />
                )}
              />
              <Route
                exact
                path="/ChallengeView"
                component={() => <Challenge person={this.state.person} />}
              />
            </Switch>
          </BrowserRouter>
        </div>
      </React.Fragment>
    );
  }
}
