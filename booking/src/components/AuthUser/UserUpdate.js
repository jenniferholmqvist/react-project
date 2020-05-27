import React, {Component} from "react";

import axios from "axios";

import firebase from "../FirebaseConfig";

class UserUpdate extends Component {

    updateEmail(e){
        e.preventDefault();

    const email        = e.target.elements.email.value;

    var user = firebase.auth().currentUser;

    user.updateEmail(email).then(function() {
  // Update successful.
    }).catch(function(error) {
  // An error happened.
    });
}
    

render () {
    return(
        <div>
        
        <h2>Vill du ändra din mailadress?</h2>
        <form onSubmit={this.updateEmail.bind(this)}>
        Email:
        <input type="email" name="email" />
    
        <button className={"stan-btn"} type="submit">Uppdatera email</button>
    </form>

        </div>
    

    )
}
}

export default UserUpdate;