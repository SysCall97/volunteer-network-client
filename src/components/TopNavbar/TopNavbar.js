import React from 'react';
import logo from '../../images/logos/logo.png';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TopNavbar = () => {
  return (
    <div style={{marginBottom: "2%"}}>
      <Navbar bg="light" variant="light">
        <Navbar.Brand>
        <Link to={`/home`} style={{ textDecoration: 'none' }}>
          <img src={logo} alt="" width="30%" />
          </Link>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link><Link to={`/home`} style={{ textDecoration: 'none', color: 'none' }}>Home</Link></Nav.Link>
          <Nav.Link href="#">Donation</Nav.Link>
          <Nav.Link href="#">Events</Nav.Link>
          <Nav.Link href="#">Bolg</Nav.Link>
          <Button variant="primary" style={{ marginRight: "10px" }}>Register</Button>
          <Button variant="dark">Admin</Button>
        </Nav>
      </Navbar>
    </div>
  );
};

export default TopNavbar;