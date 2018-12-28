import React, { Component } from 'react';
import { Container, Button, 
        Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText
      } from 'reactstrap';
import Navi from './components/Navbar';
import Footer from './components/Footer'
import {Grid, Row, Col} from 'react-flexbox-grid';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
// import './bootstrap-social.css';
// import {
//   Collapse, Navbar, NavbarToggler,NavbarBrand,Nav,NavItem,
//   NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu,
//   DropdownItem } from 'reactstrap';

var {SocialIcon} = require('react-social-icons');

class App extends Component {

  constructor(props){
    super(props);
    this.scroll = this.scroll.bind(this)
//     this.state={
//       'email':'',
//       'password':'',
//       validate: {emailState: ''},
//   }
//   this.handleChange = this.handleChange.bind(this);
}

scroll(direction){
  let far = $( '.image-container' ).width()/3*direction;
  let pos = $('.image-container').scrollLeft() + far;
  $('.image-container').animate( { scrollLeft: pos }, 1000)
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
                <Col xs={5} md={5} lg={5}><h2 className="name">Meredith</h2></Col>
              </Row>
              <Row>
                <Col xs={5} md={5} lg={5}><h2 className="name">King</h2></Col>
              </Row>
            </Grid>
            </div>
            </div>

          {/* <br></br>
          <br></br>
          <br></br> */}

          
          {/* <p>Eos sanctus dolor eos amet magna. Magna lorem diam magna vero ea, eirmod dolores kasd justo justo, rebum nonumy duo amet no dolore rebum voluptua diam diam, diam ipsum et est no tempor dolor kasd. Aliquyam voluptua clita et dolore, et ipsum duo lorem sit accusam labore sit, sed lorem invidunt at sit clita et. Sed sadipscing no lorem stet. Sit invidunt no tempor rebum kasd kasd, diam magna diam dolore ipsum invidunt sed justo, erat ipsum eos amet eirmod no ipsum et invidunt. Et et at nonumy est sadipscing aliquyam lorem amet, justo eirmod consetetur clita invidunt et ipsum labore ea elitr, sanctus justo at takimata diam clita vero takimata, duo stet dolor sed et sit diam eos. Et sed stet nonumy at justo magna. Et kasd amet et diam aliquyam et consetetur sadipscing. Dolores sea et eirmod lorem elitr sadipscing takimata et, amet sit lorem diam duo gubergren accusam sanctus amet erat. Dolor ipsum aliquyam takimata accusam sea magna rebum ut labore, sit dolor dolor dolor est. Sit sanctus elitr lorem ea, et voluptua nonumy justo eirmod voluptua vero amet takimata, et et sed ipsum ipsum amet, sea justo clita stet erat magna sit dolor est, ipsum diam lorem ea kasd, duo sit lorem ipsum et rebum ipsum. Ea ea dolor sed amet invidunt ipsum elitr consetetur. Amet est consetetur takimata dolor justo diam accusam voluptua sadipscing, diam ipsum dolores lorem no ipsum kasd labore ut sed. Dolores stet et nonumy amet kasd. Erat sanctus accusam lorem et nonumy et. Sanctus rebum vero sea ipsum aliquyam ut elitr et rebum. Ut gubergren clita no lorem ut elitr ea justo diam, sanctus gubergren accusam duo at. Kasd vero kasd erat et rebum sit accusam amet invidunt. Dolor erat sed rebum elitr sadipscing labore duo. Vero magna vero est eirmod, lorem amet diam dolor ut amet dolore sea, dolores lorem et tempor stet sit dolores sea justo. Eirmod no sed sanctus et eos erat. Ea sed magna nonumy sanctus at dolore gubergren rebum, sea eirmod est no stet ut et ipsum, dolore elitr amet sit dolore sadipscing dolore, magna et nonumy sit lorem sit sadipscing sed, voluptua at et clita sit gubergren, takimata voluptua sanctus ut et magna sed. Nonumy magna est est invidunt, lorem lorem invidunt no sanctus tempor erat lorem. Ipsum rebum et diam diam erat amet et amet accusam, sea magna consetetur gubergren consetetur labore gubergren sanctus ea est. Kasd at diam dolor gubergren tempor accusam, elitr diam eirmod nonumy rebum. Magna accusam sed magna et sed est kasd ipsum, eirmod lorem lorem magna sanctus dolore dolor accusam invidunt, dolore eos dolore stet ut. Erat rebum rebum stet clita invidunt ipsum, at sit gubergren rebum no sit lorem amet amet, amet takimata est no amet est elitr tempor no. Kasd dolor dolor no ea, stet clita clita elitr clita vero. Erat kasd gubergren magna diam lorem, tempor dolores voluptua et clita labore est magna. Sed ea lorem gubergren et kasd et magna stet. Eos kasd gubergren duo voluptua, tempor labore dolor lorem clita et eos, sadipscing justo invidunt rebum et, sed sed est ipsum kasd ipsum ipsum invidunt sanctus justo. Invidunt kasd erat est ut dolore vero justo ipsum et. Duo sit invidunt no sadipscing at rebum dolor, voluptua vero vero gubergren et eirmod aliquyam duo, diam sit amet dolor kasd eos invidunt. Dolores voluptua sed diam amet sed, voluptua kasd labore vero ea consetetur consetetur tempor dolor erat, lorem ipsum erat takimata tempor lorem diam, et kasd nonumy dolore invidunt eirmod labore ut aliquyam. Eos magna nonumy aliquyam voluptua. Eos lorem vero sadipscing et, lorem sit clita accusam sit lorem sit, clita dolor ea sadipscing dolor. Nonumy sadipscing sea et labore duo, sed diam et et dolores. Dolor labore tempor magna elitr et sit ut et et. Vero vero eos voluptua eos dolores, ut amet sanctus rebum dolor, lorem dolore nonumy vero takimata elitr est elitr lorem. Diam amet et lorem nonumy sanctus. Amet diam no ea lorem ut diam dolore nonumy, rebum duo invidunt est gubergren sit sed kasd sed, rebum clita diam sed justo et gubergren, at aliquyam lorem accusam erat vero gubergren tempor sed gubergren, dolor magna kasd ipsum labore dolor magna lorem kasd consetetur, amet stet diam nonumy gubergren no stet clita elitr, diam elitr sanctus erat et ea sanctus sed sed. Kasd et sit voluptua ea clita amet rebum sit sanctus, sed kasd stet et elitr consetetur amet. Stet eirmod consetetur lorem kasd invidunt dolores erat amet, aliquyam amet et vero labore lorem magna. Voluptua tempor invidunt diam at sanctus. Est et et takimata magna ipsum. Et stet sea aliquyam dolore, diam est gubergren sanctus dolor rebum aliquyam. Magna at lorem ipsum labore et, amet eos ipsum stet nonumy dolores. Eirmod diam sed dolore et dolor sea sed. Lorem takimata takimata.</p> */}
        
        

        <div className="main">
        <div className="wrapper">
        <a className="prev" onMouseEnter={this.scroll.bind(null,-1)} onClick={this.scroll.bind(null,-1)}>&#x25c1;</a>
        <div className="image-container">
          <div className="image"><Card>
              <CardImg width="100%" src="https://picsum.photos/200/250?image=65" alt="Card image"></CardImg>
              </Card></div>
          <div className="image"><Card>
              <CardImg width="100%" src="https://picsum.photos/200/250?image=129" alt="Card image"></CardImg>
              </Card></div>
          <div className="image"><Card>
              <CardImg width="100%" src="https://picsum.photos/200/250?image=185" alt="Card image"></CardImg>
              </Card></div>
          <div className="image"><Card>
              <CardImg width="100%" src="https://picsum.photos/200/250?image=778" alt="Card image"></CardImg>
              </Card></div>
          <div className="image"><Card>
              <CardImg width="100%" src="https://picsum.photos/200/250?image=546" alt="Card image"></CardImg>
              </Card></div>
          <div className="image"><Card>
              <CardImg width="100%" src="https://picsum.photos/200/250?image=775" alt="Card image"></CardImg>
              </Card></div>
          
        </div>
        <a className="next" onClick={this.scroll.bind(null,1)}>&#x25b7;</a>
      </div>
    </div>

    


        <Footer></Footer>
      </div>
    );
  }
}

export default App;



          // {/* <div className="scroll-wrap">
          //   <div className="card2">
          //   <Card>
          //     <CardImg width="100%" src="https://picsum.photos/200/250?image=65" alt="Card image"></CardImg>
          //     </Card>
          //     </div>

              
          // {/* <Grid fluid>
          
          
          // <Row>
          
          //   <Col xs={3} md={3} lg={3}>
          
          //   <Card>
          //     <CardImg width="100%" src="https://picsum.photos/200/250?image=990" alt="Card image"></CardImg>
          //     </Card>
          //     </Col>

          //     <Col xs={3} md={3} lg={3}>
          //     <Card>
          //     <CardImg width="100%" src="https://picsum.photos/200/250?image=990" alt="Card image"></CardImg>
          //     </Card>
          //     </Col>

          //     <Col xs={3} md={3} lg={3}>
          //     <Card>
          //     <CardImg width="100%" src="https://picsum.photos/200/250?image=990" alt="Card image"></CardImg>
          //     </Card>
          //     </Col>

          //     <Col xs={3} md={3} lg={3}>
          //     <Card>
          //     <CardImg width="100%" src="https://picsum.photos/200/250?image=990" alt="Card image"></CardImg>
          //     </Card></Col>

          //     <Col xs={3} md={3} lg={3}>
          //     <Card>
          //     <CardImg width="100%" src="https://picsum.photos/200/250?image=990" alt="Card image"></CardImg>
          //     </Card>
          //     </Col>

              
          //     </Row>
              
              
          //     </Grid> */}
