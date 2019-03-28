import React, { Component } from 'react';



export default class Challenge extends Component {
    state = {
        selectedOption: 'email'
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
                <p>inside the challenge page</p>

            <label>
            <input type="radio" id= "email" value="email" onChange={this.handleOptionChange} 
            checked={this.state.selectedOption==='email'} />
            abcd@email.com
           </label>

           <label>
            <input type="radio" id= "phoneNumber" value="phoneNumber" onChange={this.handleOptionChange} 
            checked={this.state.selectedOption==='phoneNumber'} />
            520-272-9905
           </label>

           <button type= "submit" id= "submitBtn" onClick={()=> this.sendChallenge(this.state.selectedOption)}>Send</button>

                </form>
            </div>
            
        )
    }
    

}