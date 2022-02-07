import React from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
import Image from './Image';
import Img from '../images/logo.png';
import '../styles/App.css';
import {Link} from 'react-router-dom';

function Header() {
  return(
    <>
      <Navbar fixed="top" bg="" variant="light" className="nav">
        <Container>
        <Navbar.Brand as={Link} to='/'> <Image logo={Img}/> </Navbar.Brand>
        <Nav variant='pills' className="ms-auto nav-item">
          <Nav.Link as={Link} to='/' ><span className='heads'>Home</span></Nav.Link>
          <Nav.Link as={Link} to='/startups'><span className='heads'>Startups</span></Nav.Link>
          <Nav.Link as={Link} to='/register'><span className='heads'>Register</span></Nav.Link>
          <Nav.Link as={Link} to='/login'><span className='heads'>Log In</span></Nav.Link>
        </Nav>
        </Container>
    </Navbar>
    </>
  );
};

export default Header;