import React from "react";
import AccountDashboard from "../Components/Accounts/AccountDashboard";
import { shallow } from "enzyme";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import App from "../App";

describe("testing the router", () => {
  it("Shows account dashboard link", () => {
    const wrapper = shallow(<AccountDashboard />);
    expect(
      wrapper
        .find(".h1")
        .containsMatchingElement("Accounts Dashboard work in progress...")
    );
  });

  it("Should go to accounts dashboard and check for h1", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/accountDashboard"]}>
        <App />
      </MemoryRouter>
    );
    expect(
      wrapper
        .find(".h1")
        .containsMatchingElement("Accounts Dashboard work in progress...")
    );
  });

  it("Should go to login page and check for two input tags", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/Login"]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(".form")).toHaveLength(1);
  });
});
