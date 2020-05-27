import React, {Component} from "react";

import axios from "axios";

//import "../../style/_buttons.scss";

//--------Styles----------
import "../../style/_form.scss";
import "../../style/_buttons.scss";
import "../../style/_headlines.scss";

import Logout from "../Auth/Logout";
import Navbar from "../Navbar";
import AdminUpdate from "./AdminUpdate";


class AdminProfile extends Component {

state={
    image: ""
}

eventChange(e){
    console.log(e.target.files[0])
    this.setState({image:e.target.files[0]})
}

async onSubmitToApi(e){
    e.preventDefault();
   
    const res = await axios.post("http://localhost:1337/products", {
        title:       e.target.elements.title.value,
        description: e.target.elements.description.value,
        price:       e.target.elements.price.value
       
    })

    const data = new FormData();

    data.append('files', this.state.image) //file från state
    data.append('ref', 'product') //ska skickas till product-collection (kollektionsnamnet på strapi)
    data.append('refId', res.data.id) //referensid
    data.append('field', 'image') //fältnamn

    const resPic = await axios.post("http://localhost:1337/upload", data)
}




    render () {
        return (
            <div>
            <Logout />
            
            Profil-info {this.props.userData} 
            
            
           
            <div className={"form-div"}>
                <h2 className={"upload-h2"}>Ladda upp produkt</h2>
                <form className={"admin-form"} onSubmit = {this.onSubmitToApi.bind(this)}>
                    <h4>Produktnamn:</h4>
                    <input className={"title-input"} type="text" name="title"></input>
                    <h4>Kort beskrivning:</h4>
                    <input className={"description-input"} type="text" name="description"></input>
                    <h4>Pris:</h4>
                    <input className={"price-input"} type="number" name="price"></input>
                    <h4>Lägg till bild:</h4>
                    <input className={"file-input"} type="file" name="file" onChange={this.eventChange.bind(this)}></input><br />
                    <button type="submit" className={"stan-btn"}>Spara</button>
                    {this.state.title}
                </form>
            </div>
            
            
            
            </div>
        )
    }
}

export default AdminProfile;