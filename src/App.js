import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/LoginPage';
import Challenge from './Components/ChallengePage';



export default  class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      person : {userName: '', phoneNumber:'', email:''},
      currentView: 'loginView'
    };
  }

  // switchView  = () =>{
  //   const newState = JSON.parse(JSON.stringify(this.state));
  //   newState.selectedPerson = person
  //   newState.selectedView = 'PersonEdit';
  //   super.setState(newState);  
  // }
  

  //Works with the live api but have to test with mock server
  validaterUser = (person) => {
    let dataFromSecurity=null;
    const newState = JSON.parse(JSON.stringify(this.state));
    //send request to security to validate user 
    const responseFromSecurity= fetch('http://localhost:8080/loginUser', {  
      //http://10.61.141.211:8080/loginUser'
    method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
        },
      body: 
      JSON.stringify({
      user:{
        userName: 'yourValue',
        password: 'yourOtherValue'
      }
  })
}).then(res => res.json())
  .then(response => {console.log('success',response);
                      dataFromSecurity=response;
                      console.log(dataFromSecurity.phone);})
                      
  .catch(error=>console.error('Error',error));
  
  
  if (dataFromSecurity === null){
      setTimeout(function() {console.log("My response from security"+dataFromSecurity)
      newState.person.phoneNumber = dataFromSecurity.phone;
      newState.person.email = dataFromSecurity.email
      
    }, 2000 );
  }

  //once the user validated response Ok from security - send the user to challenge page 
    // will recieve phNum and email  // will call Challenge page  
    // success {"userId":null,"userName":null,"password":null,"email":"anilvarma@gmail.com","phone":"1408937230498","otpCode":null}            
    

    //if the response is bad(non authentic user) - navigate to login page with retry message
    console.log("Welcome to Cogni-bank" + person.userName);
    console.log(person)
    newState.currentView = 'challengeView'
    newState.person.userName=person.userName
    super.setState(newState); 
    // ask SSO userEmail,phNum and auth code  
  }

  // this will take parameter from the challenge page and pass it to security
  // sendEmailOrPhNum() 
  
  
  render() {
      let tmpView = <Login validaterUser={this.validaterUser} />;
      switch (this.state.currentView) {
          case 'loginView':
              tmpView = <Login validaterUser={this.validaterUser}  />
              break;
          case 'challengeView':
              tmpView = <Challenge person={this.state.person}  />
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