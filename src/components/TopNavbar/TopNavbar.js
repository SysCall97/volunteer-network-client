import React, { useContext } from 'react';
import logo from '../../images/logos/logo.png';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import { signOut } from '../Login/firebase';

const TopNavbar = () => {
  const { user } = useContext(userContext);
    const [loggedinUser, setLoggedinUser] = user;
  return (
    <div style={{ marginBottom: "2%" }}>
      <Navbar bg="white" variant="light">
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
          {
            !loggedinUser.loggedIn &&
            <Link to="/login">
              <Button variant="primary" style={{ marginRight: "10px" }}>Login</Button>
            </Link>
          }
          {
            loggedinUser.loggedIn &&
            <Button variant="danger" style={{ marginRight: "10px" }} onClick={() => {
              signOut();
              setLoggedinUser({});
            }}>Logout</Button>
          }
          <Link to="/volunteerregisterlist">
            <Button variant="dark">Admin</Button>
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default TopNavbar;