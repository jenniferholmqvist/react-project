import React, {Component} from "react";

import Card from "./Card";
import AdminUpdate from "./Auth/AdminUpdate";


import faker from "faker";
import axios from "axios";

import Form from "./Form";


class App extends Component{

    state={
        products: []
    }
  /*   componentDidUpdate() {
        
    } */
    
    async componentDidMount () {

    const res = await axios.get("http://localhost:1337/products")
    
            console.log(res.data);
            this.setState ( {products:res.data})
}

    render() {
        return(
        
            
            <div className={"back-div"}>
            {this.state.products.map( (product) => 
            <Card 
            key =         {product.id}
            docId =       {product.id}
            title =       {product.title}
            description = {product.description}
            price =       {product.price}
            image =       {"http://localhost:1337"+product.image.url}
            />

            )}
            
           
           </div>
        
    )
}
}


export default App;