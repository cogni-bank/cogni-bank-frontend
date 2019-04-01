import React, { Component } from "react";

export default class OtpForm extends Component {
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div id="otpForm" style={this.divStyleForOTP}>
        <form>
          <label>Enter the code received </label>
          <input type="text" id="otpCode" name="otpCode" />
          <button type="submit" id="submitOtp">
            Submit OTP{" "}
          </button>
        </form>
      </div>
    );
  }
}
