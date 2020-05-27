import React , { Component } from "react";

import firebase from "./FirebaseConfig"

class Booking extends Component {

   


    onClickGetBookings() {
        const docRef= firebase.firestore().collection("booking").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                console.log(doc.id, " => ", doc.data());

                



            });
        });
    } 
    




render(){

    return(
    <div>
        <button onClick= {this.onClickGetBookings.bind(this)} className={"btn"}>Test</button>


        
        

            

    </div>
    )}
}

    




export default Booking;