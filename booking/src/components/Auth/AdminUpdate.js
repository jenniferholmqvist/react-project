import React, {Component} from "react";



import axios from "axios";

import firebase from "../FirebaseConfig";

class AdminUpdate extends Component {

    onSubmitUpdate(e) {
        e.preventDefault();
        axios
     .put('http://localhost:1337/auth/local/users', {
       username:    e.target.elements.username.value
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
    return(
        <div>
        
        <h2>Registrera</h2>
        <form onSubmit={this.onSubmitUpdate.bind(this)}>
        Användarnamn:
        <input type="text" name="username"/>
     
        <button className={"stan-btn"} type="submit">Uppdatera</button>
    </form>

        </div>
    

    )
}
}

export default AdminUpdate;