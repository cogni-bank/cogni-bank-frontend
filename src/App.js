import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/LoginPage';
import Challenge from './Components/ChallengePage';



export default  class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      people: [ ],
      currentView: 'loginView'
    };
  }

  // switchToPersonEdit = (person) =>{
  //   const newState = JSON.parse(JSON.stringify(this.state));
  //   newState.selectedPerson = person
  //   newState.selectedView = 'PersonEdit';
  //   super.setState(newState);  
  // }
  
  validaterUser = (person) => {
    const newState = JSON.parse(JSON.stringify(this.state));
    console.log(person+" inside validate user app");
    newState.currentView = 'challengeView'
    super.setState(newState); 
    // ask SSO userEmail,phNum and auth code  
  }
  
  
  render() {
      let tmpView = <Login validaterUser={this.validaterUser} />;
      switch (this.state.currentView) {
          case 'loginView':
              tmpView = <Login validaterUser={this.validaterUser}  />
              break;
          case 'challengeView':
              tmpView = <Challenge />
              //challenge will take phNo, email, authCode as parameters
              break;
          // case act.Update:
          //     tmpView = <PersonUpdate info={this.state} switch={this.changeView} />
          //     break;
          // case act.Delete:
          //     tmpView = <PersonDelete info={this.state} switch={this.changeView} />
          //     break;
          // case act.ViewAll:
          default:
          tmpView = <Login validaterUser={this.validaterUser}  />
              break;
      }
      return (
          <div className="Main">
              {tmpView}
          </div>
      );
  }
}