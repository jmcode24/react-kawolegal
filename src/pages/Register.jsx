import React from 'react';
import '../styles/App.css';
import { Container, Row, Form, Button} from 'react-bootstrap';
import Foot from '../components/Footer';

function Register() {
  return(
    <>
      <Container className='cont-1'>
        <Row className='mb-4'>
          <h3>Join KawoLegal. Sign up to get your startup listed now!</h3>
        </Row>
        <Row>
          <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Full Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Re-Enter Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
              <Button variant="primary" type="submit">Sign Up</Button>
          </Form>
        </Row>
      </Container>

      <Foot />
    </>
  );
};

export default Register;