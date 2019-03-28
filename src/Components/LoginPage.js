import React, { Component } from 'react';


class Login extends Component {
    state = {
         userName:'',
         password: ''
      };
    
  render() {
    return (
      <div className="Login">
        <div className="LoginForm">
        <form>
            <label>Enter your User Name:</label>
            <input type = "text" id = "userName" name ="userName" /> <br/>
            <label>Enter your password:</label>
            <input type = "text" id = "password" name ="password"/> <br/>
            <a href = "#" id = "forgotUser">Forgot User Name/ Password ?</a> 
            <button type = "submit" id="loginBtn" name = "login" 
                onClick ={()=> this.props.validaterUser(this.state)}>Login</button> 
        
        </form>
        </div>
        <div className="signUp">
        <button type = "submit" id= "signUp" name = "signUp">New User? Sign Up</button>

        </div>
      </div>
     
    );
  }
}

export default Login;