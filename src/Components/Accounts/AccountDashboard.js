import React, { Component } from "react";
import AccountDetails from "../AccountDetails";

export default class AccountDashboard extends Component {
  state = {
    accountId: ""
  };
  render() {
    return (
      <div>
        <AccountDetails
          person={this.props.person}
          currentView={this.props.currentView}
          //sendAccountNumber="daniel"
        />
      </div>
    );
  }
}