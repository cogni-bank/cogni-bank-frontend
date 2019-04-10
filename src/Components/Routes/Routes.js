import React, { Component } from "react";
import Login from "../../Components/Login/LoginPage";
import Challenge from "../../Components/ChallengePage";
import AccountDetails from "../../Components/AccountDetailspage";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import AccountDashboard from "../../Components/Accounts/AccountDashboard";
import RegistrationPage from "../../Components/RegistrationPage";
import ForgetPassword from "../../Components/ForgotPassword";
import ForgetUsername from "../../Components/ForgotUsername";

class Routes extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/accountDashboard"
              component={AccountDashboard}
            />

            <Route path="/AccountDetails" component={AccountDetails} />

            <Route
              path="/RegistrationPage"
              component={() => (
                <RegistrationPage
                  loginMessage={this.loginMessage}
                  currentView={this.props.currentView}
                />
              )}
            />
            <Route
              exact
              path="/Login"
              component={() => (
                <Login
                  loginMessage={this.props.loginMessage}
                  error={this.props.error}
                  submitState={this.props.submitChange}
                  person={this.props.person}
                  currentView={this.props.currentView}
                />
              )}
            />
            <Route
              path="/ForgetPassword"
              component={() => (
                <ForgetPassword currentView={this.props.currentView} />
              )}
            />
            <Route
              path="/ForgetUsername"
              component={() => (
                <ForgetUsername currentView={this.props.currentView} />
              )}
            />
            <Route
              exact
              path="/ChallengeView"
              component={() => <Challenge person={this.props.person} />}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Routes;
