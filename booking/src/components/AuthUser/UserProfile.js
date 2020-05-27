 // testa skapa:  Dashboard

import React, {Component} from "react";
import firebase from "../FirebaseConfig";

import UserUpdate from "./UserUpdate";



class UserProfile extends Component{
    
    logOut(){
        
        localStorage.clear();
        window.location.reload(false);
        firebase.auth().signOut();
    }

    deleteAccount(){
        const userFromLocal = localStorage.getItem("user");
        var user = firebase.auth().currentUser;

        if(user){

        user.delete().then(function() {
            //user deleted.
            localStorage.clear();
            window.location.reload(false);
        }).catch(function(error) {
            //An error happend
        });
    }
}

    render(){
        return(
            <div>
                Profile info {this.props.userData}

                <UserUpdate />

                 <button onClick={this.logOut.bind(this)}> Logout</button>
                 <button onClick={this.deleteAccount.bind(this)}>Radera konto</button>
                 
            </div>
        )
    }
}


export default UserProfile;