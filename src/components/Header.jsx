import React from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
import Image from './Image';
import Img from '../images/logo.png';
import '../styles/App.css';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return(
    <>
      <Navbar fixed="top" variant="light" className="nav">
        <Container>
          <Navbar.Brand as={Link} to="/"> <Image logo={Img}/> </Navbar.Brand>
          <Nav className="ms-auto nav-item">
            <Nav.Link as={NavLink} to="/" activeclassname="active"><span className='heads'>Home</span></Nav.Link>
            <Nav.Link as={NavLink} to='/startups' activeclassname="active"><span className='heads'>Startups</span></Nav.Link>
            <Nav.Link as={NavLink} to='/register' activeclassname="active"><span className='heads'>Register</span></Nav.Link>
            <Nav.Link as={NavLink} to='/login' activeclassname="active"><span className='heads'>Log In</span></Nav.Link>
          </Nav>
        </Container>
    </Navbar>
    </>
  );
};

export default Header;