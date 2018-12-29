import React, {Component} from 'react';
import './style.css';
import Scroll from 'react-horizontal-scrolling-menu';
import { Container, Button, 
    Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText
  } from 'reactstrap';

const list = [
    { name: <Card>
        <CardImg width="100%" src="https://picsum.photos/200/250?image=65" alt="Card image"></CardImg>
        </Card> },
    { name: <Card>
        <CardImg width="100%" src="https://picsum.photos/200/250?image=129" alt="Card image"></CardImg>
        </Card> },
    { name: <Card>
        <CardImg width="100%" src="https://picsum.photos/200/250?image=185" alt="Card image"></CardImg>
        </Card> },
    { name: <Card>
        <CardImg width="100%" src="https://picsum.photos/200/250?image=778" alt="Card image"></CardImg>
        </Card> },
    { name: <Card>
        <CardImg width="100%" src="https://picsum.photos/200/250?image=546" alt="Card image"></CardImg>
        </Card> },
    { name: <Card>
        <CardImg width="100%" src="https://picsum.photos/200/250?image=775" alt="Card image"></CardImg>
        </Card> },
        {name: <Card>
        <CardImg width="100%" src="https://picsum.photos/200/250?image=65" alt="Card image"></CardImg>
        </Card> },
    { name: <Card>
        <CardImg width="100%" src="https://picsum.photos/200/250?image=129" alt="Card image"></CardImg>
        </Card> },
    { name: <Card>
        <CardImg width="100%" src="https://picsum.photos/200/250?image=185" alt="Card image"></CardImg>
        </Card> },
    { name: <Card>
        <CardImg width="100%" src="https://picsum.photos/200/250?image=778" alt="Card image"></CardImg>
        </Card> }
    
  ];
   
  // One item component
  // selected prop will be passed
  const MenuItem = ({ text, selected }) => {
    return (
      <div
        className="menu-item"
      >
        {text}
      </div>
    );
  };
   
  // All items component
  // Important! add unique key
  export const Menu = (list) => list.map(el => {
    const { name } = el;
   
    return (
      <MenuItem
        text={name}
        key={name}
      />
    );
  });
   
   
  const Arrow = ({ text, className }) => {
    return (
      <div
        className={className}
      >{text}</div>
    );
  };
   
   
  const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
  const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
   
  class Carousel extends Component {
    state = {
      selected: 0
    };
    
    onSelect = key => {
      this.setState({ selected: key });
    }
   
    
    render() {
      const { selected } = this.state;
      // Create menu from items
      const menu = Menu(list, selected);
   
      return (
          
        <div className="style">
          <Scroll
            data={menu}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            selected={selected}
            onSelect={this.onSelect}
            wheel={false}
          />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          {/* <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br> */}
        </div>
        
      );
    }
  }

export default Carousel;