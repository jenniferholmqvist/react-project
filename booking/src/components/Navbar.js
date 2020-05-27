import React from "react";
import {Link} from  "react-router-dom";

import "../style/_navbar.scss";


const Navbar = () => {
    return (
        <nav className={"nav"}>
            {/*<Link className={"navbar-brand"} to="/">Navbar</Link>
                <button className={"navbar-toggler"} type={"button"} >
                    <span className={"navbar-toggler-icon"}></span>
            </button>*/}

            <div className={"nav-div"}>
                <Link className={"nav-link-1"} to="/card">Startsida</Link>
                <Link className={"nav-link-2"} to="/bookings">Bokningar</Link>
                <Link className={"nav-link-3"} to="/form">Boka tid</Link>

                <Link className={"nav-link-1"} to="/AdminSida">Admin</Link>
                <Link className={"nav-link-1"} to="/ContactForm">Kontakta oss</Link>
                
                {/*<Link className={"nav-link-4"} to="/">Logga ut</Link>*/}
                
            </div>
        </nav>
        

    )
}



export default Navbar;