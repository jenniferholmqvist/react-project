import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom"; //React router DOM är ett tredjepartsbibliotek. 
import Booking from "./Booking";

import Navbar from "./Navbar";
import Form from "./Forms/Form";
import NotFoundPage from "./NotFoundPage";
import App from "./App";
import AdminLogin from "./Auth/AdminLogin";
import AdminProfile from "./Auth/AdminProfile";
import Logout from "./Auth/Logout";
import AdminSida from "./AdminSida";



import UserLogin from "./AuthUser/UserLogin";
import UserPage from "./AuthUser/UserPage";

import FirebaseTest from "./NotInUse/FirebaseTest";
import UserProfile from "./AuthUser/UserProfile";
import ContactForm from "./Forms/ContactForm";


const Approute= () => {
    return (
        <div>

            <BrowserRouter>
            <Navbar><Logout /></Navbar>
            <Switch>
                <Route path="/Card" component={App} exact ></Route>
                <Route path="/Booking" component={Booking} exact></Route>
                <Route path="/Form" component={Form}></Route>
                <Route path="/AdminLogin" exact component={AdminLogin}></Route>
                <Route path="/AdminSida" exact component={AdminSida}></Route>
                <Route path="/AdminProfile" exact component={AdminProfile}></Route>

                <Route path="/ContactForm" exact component={ContactForm}></Route>

                <Route path="/AdminUpdate" exact component={App}></Route>

                <Route path="/FirebaseTest" exact component={FirebaseTest}></Route>

                <Route path="/UserProfile" exact component={UserProfile}></Route>

                <Route path="/testuser" exact component={UserLogin}></Route>
                <Route path="/UserPage" exact component={UserPage}></Route>


                <Route component={NotFoundPage}></Route>
            </Switch>
            </BrowserRouter>

        </div>
    )
}

export default Approute;