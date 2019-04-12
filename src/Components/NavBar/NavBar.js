import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import React, { Component } from "react";

export default class NavBar extends Component {
  state = {
    userName: localStorage.getItem("userName")
  };
  render() {
    return (
      <React.Fragment>
        <>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Cogni-Bank</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/accountDashboard" to="/acccounts">
                  Accounts
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link>{this.state.userName}</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </>
      </React.Fragment>
    );
  }
}
