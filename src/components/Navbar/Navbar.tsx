import React from "react";
import {NavbarContainer, NavbarTitle} from "./Navbar-styled";

const Navbar = () => {
    return (
        <NavbarContainer id="navbar" data-testid="navbar-container">
            <div>
                <NavbarTitle>PLANNER</NavbarTitle>
            </div>
        </NavbarContainer>
    )
}

export default Navbar