import React from "react"
import "./Navbar.css"

export default function Navbar(){
    return(
        <div className="nav">
            <ul>
                <li><a className="nav-item" href="">Accomodation</a></li>
                <li><a className="nav-item" href="">About</a></li>
                <li><a className="nav-item" href="">Contact</a></li>
            </ul>
        </div>
    )
}