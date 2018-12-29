import React, {Component} from 'react';
import {
    Collapse, Navbar, NavbarToggler,
    NavbarBrand, Nav, NavItem, NavLink,
    UncontrolledDropdown, DropdownToggle,
    DropdownMenu, DropdownItem } from 'reactstrap';
    import {Grid, Row, Col} from 'react-flexbox-grid';
    import './style.css'

class Footer extends Component{
   constructor(props){
       super(props);

   }

   
    render(){

        var {SocialIcon} = require('react-social-icons');
        return(
            <div>
                <footer >
                    <Navbar fixed={"bottom"} >
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                    <Grid  >
            <Row >
              <Col sm="12" md="12" lg="12" >
              <SocialIcon  network="instagram" color="#512d30"></SocialIcon>
              <SocialIcon network="facebook" color="#685153"></SocialIcon>  
              <SocialIcon network="snapchat" color="#8e696c"></SocialIcon>    
              <SocialIcon network="youtube" color="#756667"></SocialIcon>
              <SocialIcon network="twitter" color="#847c7d"></SocialIcon>

              </Col>
              
            </Row>
            </Grid>
            </NavItem>
            </Nav>
            </Navbar>
          </footer>




            </div>

            // <div className="footer">
            //     <Navbar className="navbar-light iconSize" expand="md" fixed={"bottom"}>
                   
            //             <Nav className="ml-auto" navbar>
            //                 <NavItem>
            //                     <NavLink href="/components/"><SocialIcon className="iconSize" network="instagram" color="#512d30"></SocialIcon></NavLink>
            //                 </NavItem>
            //                 <NavItem>
            //                     <NavLink href="/components/"><SocialIcon network="facebook" color="#685153"></SocialIcon></NavLink>
            //                 </NavItem>
            //                 <NavItem>
            //                     <NavLink href="/components/"><SocialIcon network="snapchat" color="#8e696c"></SocialIcon></NavLink>
            //                 </NavItem>
            //                 <NavItem>
            //                     <NavLink href="/components/"><SocialIcon network="youtube" color="#756667"></SocialIcon></NavLink>
            //                 </NavItem>
            //                 <NavItem>
            //                     <NavLink href="/components/"><SocialIcon network="twitter" color="#847c7d"></SocialIcon></NavLink>
            //                 </NavItem>
                            
            //             </Nav>
                    
            //     </Navbar>
            // </div>
        );
    }
}

export default Footer;