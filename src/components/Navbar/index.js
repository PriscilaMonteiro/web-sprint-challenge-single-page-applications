import React from 'react'
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';
import { Route, Switch} from 'react-router-dom'
import Hero from '../pages/Home'
import Pizza from '../pages/Pizza';

const Navbar = ({ toggle }) => {
    return (
       
        <Nav>
            <NavLink to='/'>Lambda Eats</NavLink>
            <NavIcon onClick={toggle}>
                <p>Home</p>
                <Bars />
            </NavIcon>

            <Switch>
            
                <Route exact path="/">
                    <Pizza/>
                </Route>
            </Switch>

        </Nav>
       
    
    )
}

export default Navbar
 