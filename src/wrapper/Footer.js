import React from "react";
import {Link} from "react-router-dom"




export function FooterBar(){
    return(
        <div className="relative bottom-0 left-0 bg-black h-48">
        <column className="text-white absolute top-0 right-0 pr-6">
            <h3>About Us</h3>
            <Link to="/about"></Link>
            <Link to="/gallery"></Link>
            <Link to="#"></Link>
            <Link to="#"></Link>
        </column>
        <column >
            <h1>Contact Us</h1>

        
        </column>
    </div>





    )
}