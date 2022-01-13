import React from 'react';
import './Navbar2.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Navbar2 = () => {
  return (
    <div className='navbar2'>
      <Navbar collapseOnSelect expand="lg"  variant="dark">
        <Container>
        <Navbar.Brand href="/collection">Collection</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/german">German</Nav.Link>
            <Nav.Link href="/russian">Russian</Nav.Link>
            <Nav.Link href="/japanese">Japanese</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbar2;
