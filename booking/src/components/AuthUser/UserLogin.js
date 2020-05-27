 
// register / login
// conditional rendering
// state
 
import React, {Component} from "react";
import firebase from "../FirebaseConfig";

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import UserProfile from "./UserProfile";
 
 
class UserLogin extends Component {
 
//via props
 state= {
     condition:true,
     user:""
 }


 //Configure FirebaseUI
  uiConfig = {
    //Popup signing flow rather than redirect flow
    signInFlow: 'popup', //Ska skapa en popup istället för redirect
    //Redirect to /signed In after sign in is successful. Alternatively you can prodive
    signInSuccessUrl: '/UserProfile',
    //We will display Googl and Facebook as auth providers. 
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ]
};

componentDidMount(){
    firebase.auth().onAuthStateChanged((user)=>{
        this.setState({user:user.email}) //user:user, de jämförs
        console.log(user);
    })
}

 onClickRegister(){
     this.setState({condition:false})
 }
 
 onClickLogin(){
    this.setState({condition:true})
 }
onSubmitLogin(e){
    e.preventDefault();
 
const email= e.target.elements.email.value;
const password = e.target.elements.password.value;

    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    //.then(res=> this.props.userCredential(res.user.email))
    //react-router
    //navigate
    //Skydda routerna! 
 
}
 
 onSubmitRegister(e){
    e.preventDefault();
     
     const email        = e.target.elements.email.value;
     const password     = e.target.elements.password.value;
     const displayName  = e.target.elements.username.value;
    
 
     firebase
     .auth()
     .createUserWithEmailAndPassword(email, password)
     .then( (res)=> {

        // från child till parent med hjälp av callback funktion
         res.user.sendEmailVerification()
         //this.props.userCredential(res.user.email)
         //this.props.showDisplayName(displayName)
     } )
    }
   
     resetPassword(e) {
         var auth = firebase.auth();
         var emailAddress = e.target.elements.resetEmail.value;
         auth.sendPasswordResetEmail(emailAddress).then(function() {
             //Email sent
             console.log("email sent")
         })
e.preventDefault();
     }

     
   
    
    render(){
        
        return(
            <div>
 
         {this.state.condition  &&
         <div>
            <h2>Login</h2>
         <form  onSubmit={this.onSubmitLogin.bind(this)}>
                    <input type="email"   name="email"/>
                    <input type="password" name="password" />
                    <button>Login</button>
                </form>


                <form onSubmit={this.resetPassword.bind(this)}>
                    <input type="email" name="resetEmail"></input>
                    <button>Reset password</button>
                </form>


                
                 
                 </div>
               
                }
               
               
           {!this.state.condition &&
 
           <div>
               <h2>Register</h2>
            <form onSubmit={this.onSubmitRegister.bind(this)}>
                     <input type="text" name="username"/>
                     <input type="email" name="email" />
                     <input type="password" name="password" />
 
                    <button>Register</button>
 
                </form>
                <div>Or</div>
                <div>
                <h1>My App</h1>
                <p>Please sign in:</p>
                <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
                </div>
                {this.state.user? <UserProfile userData={this.state.user} /> : <div> </div>}

                </div>
               
                }
 
{/* <button onClick={this.onClickRegister.bind(this)}>Don't have an account?</button> */}
<button onClick={this.onClickLogin.bind(this)}>Login</button>
<button onClick={this.onClickRegister.bind(this)}>Register</button>
               
 
            </div>
        )
    }
}
 
export default UserLogin;