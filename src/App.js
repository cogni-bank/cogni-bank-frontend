import React, { Component } from "react";
import "./App.css";
import Login from "./Components/LoginPage";
import Challenge from "./Components/ChallengePage";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: { userName: "", phone: "", email: "" },
      currentView: "loginView"
    };
  }

  // switchView  = () =>{
  //   const newState = JSON.parse(JSON.stringify(this.state));
  //   newState.selectedPerson = person
  //   newState.selectedView = 'PersonEdit';
  //   super.setState(newState);
  // }

  //Works with the live api but have to test with mock server
  validaterUser = person => {
    console.log("persone", person);
    let dataFromSecurity = null;
    const newState = JSON.parse(JSON.stringify(this.state));
    //send request to security to validate user
    fetch("http://localhost:8080/loginUser", {
      //'http://localhost:8080/loginUser', {
      //http://10.61.141.211:8080/loginUser'
      //mode:'no-cors',
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify({
        user: {
          userName: person.userName,
          password: person.password
        }
      })
    })
      .then(res => {
        console.log("my first response", res);
        return res.json();
      })
      .then(response => {
        console.log("The response", response);
        dataFromSecurity = response;
        newState.person.phone = dataFromSecurity.phone;
        newState.person.email = dataFromSecurity.email;
        newState.currentView = "challengeView";
        newState.person.userName = person.userName;
        console.log("My response from security ", newState.person);
        super.setState(newState);
      })

      .catch(error => console.error("Error", error));

    //if the response is bad(non authentic user) - navigate to login page with retry message
  };

  // this will take parameter from the challenge page and pass it to security
  // sendEmailOrPhNum()

  render() {
    let tmpView = <Login validaterUser={this.validaterUser} />;
    switch (this.state.currentView) {
      case "loginView":
        tmpView = <Login validaterUser={this.validaterUser} />;
        break;
      case "challengeView":
        tmpView = <Challenge person={this.state.person} />;
        //challenge will take phNo, email as parameters
        break;
      // case act.Update:
      //     tmpView = <PersonUpdate info={this.state} switch={this.changeView} />
      //     break;
      // case act.Delete:
      //     tmpView = <PersonDelete info={this.state} switch={this.changeView} />
      //     break;
      // case act.ViewAll:
      default:
        tmpView = <Login validaterUser={this.validaterUser} />;
        break;
    }
    return <div className="Main">{tmpView}</div>;
  }
}
