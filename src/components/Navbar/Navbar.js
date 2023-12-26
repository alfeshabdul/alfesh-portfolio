import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
      <div className="container">
        <Link className="navbar-brand" to="/"> <span className='bl-c'> ALFESH ABDUL </span></Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto ">
            <li className="nav-item">
              <Link className="nav-link wt-c" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link wt-c" to="/education">Education</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link wt-c" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link wt-c" to="/">⌂</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
