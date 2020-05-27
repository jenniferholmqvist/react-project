  
import React, { Component } from "react";

import firebase from "./FirebaseConfig";



class FirebaseTest extends Component {
 //Först går den in på firebase/firestore
 //Sen öppnar man en koppling för att den ska gå in på tabell och kolumn
 //Sen gör vi en get request för at hämta data
 //Sen har den en promise
 //Vi kollar sen om den kan hämta data (console.log)
 //Sen används set-request för att skriva in data i databasen
 
    onClickFirebase() {

        const db = firebase.firestore();
        const docRef = db.collection("booking").doc("info")
        const docRef2 = db.collection("booking").doc("info2")
        //alt
        
//läser data from firebase
        docRef
        .get()
        .then(booking => {
            if (booking.exists) {
                console.log("document data: ", booking.data())
            }
            else {
                console.log("error")
            }
        })

// skriva data i firebase
          docRef.set({
              item:"test",
              price:2000
          })
          docRef2.set({
            item:"testa",
            price:3000
        })
     
    }

    render() {

        return (
            <div>
                <button onClick={this.onClickFirebase.bind(this)}> Hämta firestore info</button>
            </div>
        )
    }

}

export default FirebaseTest;