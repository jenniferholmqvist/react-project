//kommer att visas om localstorage har userinformation eller (jwt)

import React, {Component} from "react";

import {Link} from  "react-router-dom";

import "../../style/_navbar.scss";

class Logout extends Component {

logOut() {
    localStorage.clear();
    window.location.reload(false); 
}


render () {
    return (
        

<Link className={"nav-link-4"} onClick={this.logOut.bind(this)}>Logga ut</Link>

    )

//lägg till en logout Component
//visa den i navbar om användare är inloggad
//flytta adminForm i adminprofile

}
}

export default Logout;