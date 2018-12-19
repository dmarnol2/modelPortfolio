import React, { Component } from 'react';
import { Container, Button, 
        Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText
      } from 'reactstrap';
import {Grid, Row, Col} from 'react-flexbox-grid';
import logo from './logo.svg';
import './App.css';
// import './bootstrap-social.css';
import {
  Collapse, Navbar, NavbarToggler,NavbarBrand,Nav,NavItem,
  NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu,
  DropdownItem } from 'reactstrap';

var {SocialIcon} = require('react-social-icons');

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      'email':'',
      'password':'',
      validate: {emailState: ''},
  }
  this.handleChange = this.handleChange.bind(this);
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Portfolio template in React</h3>
            

          
        </header>
      </div>
    );
  }
}

export default App;
