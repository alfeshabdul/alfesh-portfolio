import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const NavigationBar = () => {
  return (
    <Navbar className="navbar center" expand="lg">
      <div className="container ">
        <Navbar.Brand className='wt-c' href="/">ALFESH ABDUL</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ml-auto wt-c">
            <Nav.Link className='wt-c' href="/about">About</Nav.Link>
            <Nav.Link className='wt-c' href="/education">Education</Nav.Link>
            <Nav.Link className='wt-c' href="/projects">Projects</Nav.Link>
          
            <Nav.Link className='wt-c' href="/">⌂</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavigationBar;
