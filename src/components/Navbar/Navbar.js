import React, {Component} from 'react';
import {
    Collapse, Navbar, NavbarToggler,
    NavbarBrand, Nav, NavItem, NavLink,
    UncontrolledDropdown, DropdownToggle,
    DropdownMenu, DropdownItem } from 'reactstrap';

class Navi extends Component{
   constructor(props){
       super(props);

   }
    render(){
        return(
            <div>
                <Navbar className="navbar-light" expand="md" fixed={"top"}>
                    <NavbarBrand href="/"></NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    {/* <Collapse isOpen={this.state.isOpen} navbar> */}
                        <Nav className="ml-auto" navbar>
                            <NavItem><NavLink href="/components/">Link</NavLink></NavItem>
                            <NavItem><NavLink href="#">Another Link</NavLink></NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>Dropdown</DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>Option 1</DropdownItem>
                                    <DropdownItem>Option 2</DropdownItem>
                                    <DropdownItem divider/>
                                    <DropdownItem>Another Option</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    {/* </Collapse> */}
                </Navbar>
            </div>
        );
    }
}

export default Navi;