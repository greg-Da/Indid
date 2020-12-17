import React, {useState, useEffect} from 'react';
import Button from "./downloadBtnComponent";
import style from "./navBar.css";

const NavBar = (props) => {
    return (
        <nav>
            <div className="nav-wrapper">
                <img src="https://cdn.discordapp.com/attachments/755800455506034728/788775593503358996/indid.png"/>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li> <Button/> </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
