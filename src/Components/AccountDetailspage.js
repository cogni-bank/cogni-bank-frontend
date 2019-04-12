import React, { Component } from "react";
import LogOut from "./LogOut";

/*Will be called once success Otp validation   */
export default class AccountDetails extends Component {
  state = {};

  render() {
    return (
      <div id="accountDetails">
        {this.props.person.userName}
        <h1>Welcome to the AccountDetails</h1>
        <LogOut />
      </div>
    );
  }
}
