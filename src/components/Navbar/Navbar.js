import React, {Component} from 'react';
import {
    Collapse, Navbar, NavbarToggler,
    NavbarBrand, Nav, NavItem, NavLink,
    UncontrolledDropdown, DropdownToggle,
    DropdownMenu, DropdownItem } from 'reactstrap';
    import './style.css'

class Navi extends Component{
   constructor(props){
       super(props);
       this.toggleNavbar = this.toggleNavbar.bind(this);
       this.toggle = this.toggle.bind(this);
       this.state = {
           collapsed:true,
           isOpen: false
       };
   }

   toggleNavbar(){
       this.setState({
           collapsed: !this.state.collapsed
       });
   }

   toggle(){
       this.setState({
           isOpen: !this.state.isOpen
       })
   }
    render(){
        return(
            <div>
                <Navbar className="navbar-light" expand="md" fixed={"top"}>
                    {/* <Navbar color="light" fixed={"top"} expand="md"> */}
                    <NavbarBrand href="/" className="mr-auto"></NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    {/* <NavbarToggler onClick={this.toggleNavbar} className="mr-2"/> */}
                    <Collapse isOpen={this.state.isOpen} navbar>
                    {/* <Collapse isOpen={this.state.collapsed} navbar> */}
                        <Nav className="ml-auto" navbar>
                            <NavItem><NavLink href="#" className="navText">Link</NavLink></NavItem>
                            <NavItem><NavLink href="#" className="navText">Another Link</NavLink></NavItem>
                            {/* <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>Dropdown</DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>Option 1</DropdownItem>
                                    <DropdownItem>Option 2</DropdownItem>
                                    <DropdownItem divider/>
                                    <DropdownItem>Another Option</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown> */}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navi;