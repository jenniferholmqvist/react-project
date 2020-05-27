import React , {Component} from "react";

//--------Styles----------
import "../style/_form.scss";
import "../style/_buttons.scss";

class Form extends Component {
    constructor(props){
    super(props);

        //initilerat state
        this.state = {
            name:undefined,
            appointmentTime:undefined,
            mobile:undefined
        }
    }

    handleOnChangeName=(e) =>{
        this.setState({name: e.target.value})

    }
    handleOnChangeTime=(e) =>{
        this.setState({appointmentTime: e.target.value})
        
    }
    handleOnChangeMobile=(e)=>{
        this.setState({mobile: e.target.value})
        
    }

    handleOnSubmit(e){ //gör att den inte gör enligt default, alltså uppdaterar inte sidan. 
        e.preventDefault()
    }


    render(){
        return(
            <div className={"form-div"}>
                <form className={"booking-form"} onSubmit={this.handleOnSubmit}>
                    <h4>Namn:</h4>
                    <input className={"name-input"} type={"text"} placeholder={"Ange ditt namn"} onChange={this.handleOnChangeName}></input>
                    <h4>Datum:</h4>
                    <input className={"date-input"}type={"text"} placeholder={"Ange önskat datum"} onChange={this.handleOnChangeTime}></input>
                    <h4>Telefonnummer:</h4>
                    <input className={"number-input"} type={"number"} placeholder={"Ange telefonnummer"} onChange={this.handleOnChangeMobile}></input><br />
                    <input className={"stan-btn"} type={"submit"} onSubmit={this.handleOnSubmit} value={"Boka!"}></input>
                </form>

                <div>{this.state.name}</div>
                <div>{this.state.appointmentTime}</div>
                <div>{this.state.mobile}</div>

            </div>
        )
    }
}

export default Form;