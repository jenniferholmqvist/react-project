import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom"; //React router DOM är ett tredjepartsbibliotek. 
import Booking from "./Booking";

import Navbar from "./Navbar";
import Form from "./Form";
import NotFoundPage from "./NotFoundPage";
import App from "./App";

const Approute= () => {
    return (
        <div>

            <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/Card" component={App} exact ></Route>
                <Route path="/Bookings" component={Booking} exact></Route>
                <Route path="/Form" component={Form}></Route>
                <Route component={NotFoundPage}></Route>
            </Switch>
            </BrowserRouter>

        </div>
    )
}

export default Approute;