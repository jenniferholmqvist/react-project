import React, {Component} from "react";

import axios from "axios";

class AdminLogin extends Component {

    //villkorlig rendering

    state = { 
        condition: true, //om condition är true, visas login. om condition är false så visas registrera
        user: ""
    }

    onClickRegister() {
        this.setState({condition:false})
    }
    onClickLogin() {
        this.setState({condition:true})
    }

    onSubmitLogin(e) {
        e.preventDefault();
        axios
        .post('http://localhost:1337/Auth/local', {
            identifier: e.target.elements.email.value, //kommer från vårt formulär
            password:   e.target.elements.password.value //kommer från vårt formulär
  })
  .then(response => { //om login-uppgifter e korrekt så visas nedan: 
    // Handle success.
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt); //jason-webb-token
    this.props.userCredential(response.data.user, response.data.jwt)
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error);
  });
}

    onSubmitRegister(e) {
        e.preventDefault();
        axios
     .post('http://localhost:1337/auth/local/register', {
       username:    e.target.elements.username.value,
       email:       e.target.elements.email.value,
       password:    e.target.elements.password.value,
     })
     .then(response => {
       // Handle success.
       console.log('Well done!');
       console.log('User profile', response.data.user);
       console.log('User token', response.data.jwt);
       this.props.userCredential(response.data.user, response.data.jwt)
     })
     .catch(error => {
       // Handle error.
       console.log('An error occurred:', error);
     });
    }

    render () {
        return (
        <div> {/*om den är true, visa logga in*/}
            {this.state.condition && 
            <div>
                <h2>Logga in!</h2>
            <form onSubmit={this.onSubmitLogin.bind(this)}>
                <input type="email" name="email"></input>
                <input type="password" name="password"></input>
                <button className={"stan-btn"} type="submit">Logga in</button> 
            </form>
            </div>}
            
            {!this.state.condition && 
            <div>
                <h2>Registrera</h2>
                <form onSubmit={this.onSubmitRegister.bind(this)}>
            
                <input type="text" name="username"/>
                <input type="email" name="email" />
                <input type="password" name="password"/>
                <button className={"stan-btn"} type="submit">Registrera</button>
            </form>
            </div>}
            
            <button onClick={this.onClickRegister.bind(this)} >Har du inget konto?</button>
            <button onClick={this.onClickLogin.bind(this)} >Logga in</button>
            

        </div>
        )
    }
}

export default AdminLogin;
