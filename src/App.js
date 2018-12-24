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
      <div className="Site">       
        <Navi></Navi>
        <div className="Site-content"></div>
        <div className = "parallaxContainer">
          <div className = "parallax">
            <Grid fluid>
              <Row>
                <Col xs={5} md={5} lg={5}><h2 className="name">Misha</h2></Col>
              </Row>
              <Row>
                <Col xs={5} md={5} lg={5}><h2 className="name">Kuznetsov</h2></Col>
              </Row>
            </Grid>

            
          </div>
          <br></br>
          <br></br>
          <br></br>
          
          <p>Herzen tränen um drängt früh lied alten. Mein herauf äolsharfe ich jugendlich zauberhauch 
            steigt sage, ich herzen ein ist lied vom wie auf. Wird die wird nicht strenge träne weich 
            zerstreuet,  es zug bang bringt, freundliche herzen und die folgenden. Mir euch sich verklungen 
            nennt. Es sehnen die sich.</p>
          <p>Herzen tränen um drängt früh lied alten. Mein herauf äolsharfe ich jugendlich zauberhauch steigt sage, ich herzen ein ist lied vom wie auf. Wird die wird nicht strenge träne weich zerstreuet,  es zug bang bringt, freundliche herzen und die folgenden. Mir euch sich verklungen nennt. Es sehnen die sich.</p>
          <p>Herzen tränen um drängt früh lied alten. Mein herauf äolsharfe ich jugendlich zauberhauch steigt sage, ich herzen ein ist lied vom wie auf. Wird die wird nicht strenge träne weich zerstreuet,  es zug bang bringt, freundliche herzen und die folgenden. Mir euch sich verklungen nennt. Es sehnen die sich.</p>
          <p>Herzen tränen um drängt früh lied alten. Mein herauf äolsharfe ich jugendlich zauberhauch steigt sage, ich herzen ein ist lied vom wie auf. Wird die wird nicht strenge träne weich zerstreuet,  es zug bang bringt, freundliche herzen und die folgenden. Mir euch sich verklungen nennt. Es sehnen die sich.</p>
        
        </div>


        <Footer></Footer>
      </div>
    );
  }
}

export default App;
