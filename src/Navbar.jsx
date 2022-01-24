import React from "react"
import {NavLink} from "react-router-dom"

 
const Navbar = () => {
    
return(
       
<div className="container navs">
    <div className="row my-4"> 
        <div className=" col-md-12 col-12 d-flex justify-content-center text-center mx-auto">
            <ul className="navbar-items"> 
                <li className="nav-item"> <NavLink exact className="nav-link active" aria-current="page" to="/">HOME</NavLink> </li>
                <li className="nav-item"> <NavLink exact className="nav-link" to="/gallery">GALLERY</NavLink> </li>
                <li className="nav-item"> <NavLink exact className="nav-link" to="/contact">CONTACT</NavLink> </li>
                <li className="nav-item"> <NavLink exact className="nav-link" to="/tourlist">TOUR LIST</NavLink> </li>
            </ul>
        </div>
    </div>
 </div>    
   
);
}
export default Navbar

