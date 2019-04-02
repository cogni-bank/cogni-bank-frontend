import React, { Component } from "react";

export default class AccountDetails extends Component {
  state = {};

  render() {
    return (
      <div id="accountDetails">
        {this.props.person.userName}
        <h1>Welcome to the AccountDetails</h1>
      </div>
    );
  }
}
