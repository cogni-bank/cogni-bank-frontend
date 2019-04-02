import React, { Component } from "react";
import Timer from "./Timer";

export default class OtpForm extends Component {
  state = {
    otpCode: ""
  };

  handleChangeOtpForm = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div id="otpForm">
        {/* <Timer start={Date.now()} /> */}
        <form method="POST">
          <label>Enter the code received </label>
          <input
            type="text"
            id="otpCode"
            name="otpCode"
            onChange={this.handleChangeOtpForm}
          />
          <button
            type="button"
            id="submitOtp"
            onClick={() => this.props.sendOTP(this.state.otpCode)}
          >
            Submit OTP{" "}
          </button>
        </form>
      </div>
    );
  }
}
