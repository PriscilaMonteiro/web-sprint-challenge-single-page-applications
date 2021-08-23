import React from 'react'
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';

const Navbar = ({ toggle }) => {
    return (
       
        <Nav>
            <NavLink to='/'>Lambda Eats</NavLink>
            <NavIcon onClick={toggle}>
                <p>Home</p>
                <Bars />
            </NavIcon>
        </Nav>
       
    
    )
}

export default Navbar
 