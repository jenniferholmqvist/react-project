import React, {Component} from "react";
import firebase from "./FirebaseConfig";
import faker from "faker";

import "../style/_card.scss";
import "../style/_buttons.scss";
import "../style/_background.scss";



class Card extends Component {

    onClickSaveToFirestore() {
        ///När vi trycker på knappen så borde vi skriva in nedan i docRef
        const docRef = firebase.firestore().collection("booking").doc(this.props.docId.toString()); //skapar ni dokument-referens

        docRef.set({ //sätter värdet
            name: this.props.title,
            description: this.props.description,
            price: this.props.price
        })


    }

render () {
    return(
        
        
        <div className={"card"} >
                <div className={"card-body"}>
                    <h2 className={"card-title"}>{this.props.title}</h2>
                        <p className={"card-text"}> {this.props.description} </p>
                            <p className={"card-price"}>fr. {this.props.price} kr</p>
                                {/*<img> src={this.props.image}</img>*/}
                                <button className={"stan-btn"} onClick={this.onClickSaveToFirestore.bind(this)}>Boka</button>
                               
                </div>


    
        </div>
    

    )
}
}

export default Card;