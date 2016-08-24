import React from 'react';
import { Nav,NavItem,Navbar } from 'react-bootstrap';

class Navigation extends React.Component {

  render() {
      return (
         <Navbar fluid={true}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Messin'</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="/weather">Weather</NavItem>
            <NavItem eventKey={2} href="/map">Map</NavItem>
          </Nav>
        </Navbar>
      )
    }
}

export default Navigation;
