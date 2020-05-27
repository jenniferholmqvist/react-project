import React, { Component } from "react";

import UserProfile from "./UserProfile";
import UserLogin from "./UserLogin";

import firebase from "../FirebaseConfig";


class UserPage extends Component {
    state = {
        user: null || localStorage.getItem("user"),
        displayName : ""
        
    }

    //life cycle metod
    //component kör efter render() - > componentDidMount -> uppdateras state-> sen anropas render igen (anropas efter varje uppdatering av state)
    componentDidMount(){
        firebase.auth().onAuthStateChanged( //anropas när man loggar in eller loggar ut 
            user=> this.setState({user: user.email, displayName:user.displayName})
        )
    }



 //const enfunction = ()=> { }

    render() {
        const loggedIn = this.state.user;
        return (
            <div>
                {!loggedIn ?
                    <UserLogin /> :
                    <UserProfile userData={this.state.displayName || this.state.user} />
                }
            </div>
        )
    }
}

export default UserPage;