import React, {Component} from "react";
import Card from "./Card";
import faker from "faker";
import axios from "axios";

import Form from "./Form";


class App extends Component{

    state={
        products: []
    }

    onClickApi() {
        axios.get("http://localhost:1337/products").then( response=> {
            console.log(response.data);   
            this.setState( {products:response.data})     
        })
    }

    render() {
        return(
        <div className={"back-div"}>
            <button className={"stan-btn"} onClick={this.onClickApi.bind(this)}>Våra tjänster!</button>
            
            <div>
            {this.state.products.map( (product) => 
            <Card 
            key =         {product.id}
            title =       {product.title}
            description = {product.description}
            price =       {product.price}
            image =       {"http://localhost:1337"+product.image.url}
            />
            )}
           
           </div>
        </div>
    )
}
}


export default App;