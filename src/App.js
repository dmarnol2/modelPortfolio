import React, { Component } from 'react';
import { Container, Button, 
        Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText
      } from 'reactstrap';
import Navi from './components/Navbar';
import Footer from './components/Footer'
import {Grid, Row, Col} from 'react-flexbox-grid';
import logo from './logo.svg';
import './App.css';
// import './bootstrap-social.css';
// import {
//   Collapse, Navbar, NavbarToggler,NavbarBrand,Nav,NavItem,
//   NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu,
//   DropdownItem } from 'reactstrap';

var {SocialIcon} = require('react-social-icons');

class App extends Component {

  constructor(props){
    super(props);
//     this.state={
//       'email':'',
//       'password':'',
//       validate: {emailState: ''},
//   }
//   this.handleChange = this.handleChange.bind(this);
}

  render() {
    return (
      <div className="App">
      
        
        <Navi></Navi>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
