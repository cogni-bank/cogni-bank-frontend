import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { shallow } from "enzyme";

describe("Test for App...", () => {
  it("renders without crashing.", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the login page.", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Login")).toHaveLength(0);
  });

  // it("Login button should be clickable.", () => {
  //   const wrapper = shallow(<App />);
  //   const person = { userName: "Alan", password: "password1234" };
  //   expect(wrapper.instance().handleSubmitLogin(person)).toEqual();
  //   expect(wrapper);
  // });

  // it("should invoke challenge view page.", () => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.state().currentView).toEqual("loginView");
  //   wrapper.instance().handleSubmitLogin();
  //   expect(wrapper.state().currentView).toEqual("challengeView");
  // });
});
