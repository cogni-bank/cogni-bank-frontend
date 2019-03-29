import React, { Component } from 'react';

export default class Challenge extends Component {
    state = {
        selectedOption: 'phoneNumber'
    }
    handleOptionChange = (changeEvent) =>{
        this.setState({
          selectedOption: changeEvent.target.value
        });
      }

      sendChallenge = (selectedOption) =>{
          console.log(selectedOption + " inside send challenge")
          //SendChallenge() should enable the challenge text box
        //onHandleChenge for text box should compare the auth code
      }
      render(){
        return(
            
            <div className="ChallengeForm">
            <form>
                <p>Welcome, {this.props.person.userName} </p>
                <p>Please choose one of the below option to authenticate your account !! {this.props.person.email} !!</p>
            <label>
            <input type="radio" id= "email" value="email" onChange={this.handleOptionChange} 
            checked={this.state.selectedOption==='email'} />
            {this.props.person.email}
           </label>

           <label>
            <input type="radio" id= "phoneNumber" value="phoneNumber" onChange={this.handleOptionChange} 
            checked={this.state.selectedOption==='phoneNumber'} />
            {this.props.person.phoneNumber}
           </label>

           <button type= "submit" id= "submitBtn" onClick={()=> this.sendChallenge(this.state.selectedOption)}>Send</button>

                </form>
            </div>
            
        )
    }
    

}