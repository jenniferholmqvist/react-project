import React, {Component} from "react";

import firebase from "./FirebaseConfig";

export default class ContactForm extends Component {

    onSubmitForm(e){
        e.preventDefault();

        const db = firebase.firestore();
        //userid ska komma från currentuser som finns inut firebase.auth()
        //const userId = firebase.auth().currentUser.userId
        //if (firebase.auth().currentUser.userId) kör nedan
        const docRef = db.collection("contactFormData").doc("userId");
        //else meddelande till användare, tex.skapa ett konto för att kunna skicka meddelande
        // eller gör doc("trash")

        docRef.set({
            name : e.target.elements.name.value,
            email : e.target.elements.email.value,
            meddelande : e.target.elements.textarea.value
                })

                //condiction state
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitForm.bind(this)}>
                    <label>Namn</label>
                    <input type="text" name="name" /><br />
                    <label>Email</label>
                    <input type="email" name="email"/><br />
                    <label>Meddelande</label>
                    <textarea name="textarea" rows="4" cols="50"></textarea> <br />

                    <button>Kontakta oss</button>

                </form>

                <div>Vi har skickat ditt meddelande</div>
            </div>

        )
    }
}