import React from 'react';
import '../styles/App.css';
import Foot from '../components/Footer';
// import Image from '../components/Image';
import Slate from '../images/slatecube.png';
import Sleek from '../images/sleek.png';
import Think from '../images/think&zoom.jpg';
import {Container, Row, Col, Button, InputGroup, FormControl} from 'react-bootstrap';
import { FaSearchengin } from "react-icons/fa";

function Startups() {
  return (
    <>
      <Container className='cont p-2'>
        <Row className='mb-4 mt-3'>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search..."
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <Button variant="primary" id="button-addon2"><FaSearchengin /> Search</Button>
        </InputGroup>
        </Row>
        <Row className='mb-4 mt-3'>
          <Col md={4}>
            <img src={Think} alt="Think & Zoom" className='img-fluid'/>
          </Col>
          <Col md={8}>
            <h3 className="text-primary">Think and Zoom</h3>
            <p>
              Providing solutions for the visually impaired. such as mind
              controlled zooming and wearable controlled zooming
            </p>
            <Button variant="outline-primary">See Full Details</Button>
            <hr/>
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col md={4}>
          <img src={Slate} alt="Slatecube" className='img-fluid'/>
          </Col>
          <Col md={8}>
            <h3 className="text-primary">Slatecube</h3>
            <p>
              Slatecube help job seekers develop job-relevant skills, gain work
              experience and land well paying jobs through world class up-scalling
              courses and intenships
            </p>
            <Button variant="outline-primary">See Full Details</Button>
            <hr/>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
          <img src={Sleek} alt="Sleek" className='img-fluid'/>
          </Col>
          <Col md={8}>
            <h3 className="text-primary">Sleek Job Academy</h3>
            <p>
            Trains world class software developers in Ghana and match them to
            employment opportunities
            </p>
            <Button variant="outline-primary">See Full Details</Button>
          </Col>
        </Row>
      </Container>
      <Foot />
    </>
  );
};

export default Startups;