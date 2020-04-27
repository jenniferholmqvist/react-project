import React from "react";
import faker from "faker";

import "../style/_card.scss";
import "../style/_buttons.scss";
import "../style/_background.scss";


const Card = (props)=> {
    return(
    
        <div className={"card"} >
                <div className={"card-body"}>
                    <h2 className={"card-title"}> {props.title}</h2>
                        <p className={"card-text"}> {props.description} </p>
                            <p className={"card-price"}>fr. {props.price} kr</p>
                                {/*<img>{props.image}</img>*/}
                                <button className={"stan-btn"}>Boka</button>   
                </div>
        </div>
    

    )
}
export default Card;