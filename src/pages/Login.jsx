import React from 'react';
import '../styles/App.css';
import Foot from '../components/Footer';
import { Container, Row, Form, Button } from 'react-bootstrap';

function Login() {
  return(
    <>
      <Container className='cont-1 cont-b'>
        <Row>
          <h3>Already a Member? Login to add your Startup.</h3>
        </Row>
        <Row className='mt-4'>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">Sign In</Button>
          </Form>
        </Row>
      </Container>

      <Foot />
    </>
  );
};

export default Login;