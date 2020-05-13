import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom"; //React router DOM är ett tredjepartsbibliotek. 
import Booking from "./Booking";

import Navbar from "./Navbar";
import Form from "./Form";
import NotFoundPage from "./NotFoundPage";
import App from "./App";
import AdminLogin from "./Auth/AdminLogin";
import AdminProfile from "./Auth/AdminProfile";
import Logout from "./Auth/Logout";
import AdminSida from "./AdminSida";


import UserLogin from "./AuthUser/UserLogin";
import UserPage from "./AuthUser/UserPage";

import FirebaseTest from "./FirebaseTest";


const Approute= () => {
    return (
        <div>

            <BrowserRouter>
            <Navbar><Logout /></Navbar>
            <Switch>
                <Route path="/Card" component={App} exact ></Route>
                <Route path="/Bookings" component={Booking} exact></Route>
                <Route path="/Form" component={Form}></Route>
                <Route path="/AdminLogin" exact component={AdminLogin}></Route>
                <Route path="/AdminSida" exact component={AdminSida}></Route>
                <Route path="/AdminProfile" exact component={AdminProfile}></Route>

                <Route path="/AdminUpdate" exact component={App}></Route>

                <Route path="/FirebaseTest" exact component={FirebaseTest}></Route>
                <Route path="/UserPage" exact component={UserPage}></Route>


                <Route component={NotFoundPage}></Route>
            </Switch>
            </BrowserRouter>

        </div>
    )
}

export default Approute;