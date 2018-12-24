import React, {Component} from 'react';
import {
    Collapse, Navbar, NavbarToggler,
    NavbarBrand, Nav, NavItem, NavLink,
    UncontrolledDropdown, DropdownToggle,
    DropdownMenu, DropdownItem } from 'reactstrap';

class Footer extends Component{
   constructor(props){
       super(props);

   }

   
    render(){

        var {SocialIcon} = require('react-social-icons');
        return(
            <div>
                <Navbar className="navbar-light" expand="md" fixed={"bottom"}>
                   
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/"><SocialIcon network="instagram" color="#512d30"></SocialIcon></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/"><SocialIcon network="facebook" color="#685153"></SocialIcon></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/"><SocialIcon network="snapchat" color="#8e696c"></SocialIcon></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/"><SocialIcon network="youtube" color="#756667"></SocialIcon></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/"><SocialIcon network="twitter" color="#847c7d"></SocialIcon></NavLink>
                            </NavItem>
                            
                        </Nav>
                    
                </Navbar>
            </div>
        );
    }
}

export default Footer;