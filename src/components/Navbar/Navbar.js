import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar className="navbar center" expand="lg">
      <div className="container ">
        <Navbar.Brand className='wt-c' to="/">ALFESH ABDUL</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ml-auto wt-c">
            <Link className='wt-c' to="/about" >About</Link>
            <Link className='wt-c' to="/education">Education</Link>
            <Link className='wt-c' to="/projects">Projects</Link>
          
            <Link className='wt-c' to="/">⌂</Link>

          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavigationBar;
