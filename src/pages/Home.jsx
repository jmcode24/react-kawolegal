import React from 'react';
import '../styles/App.css';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Foot from '../components/Footer';

function Home() {
  return (
    <>
      <section class="jumbotron jumbotron-fluid showcase">
        <div class="showcase_inner">
          <h1>KAWOLEGAL</h1>
          <p>A collaborative ecosystem for problem <br />solvers and support for startups.</p>
          <Button as={Link} to='/register'>Register Now !</Button>
        </div>
      </section>

      <Foot />
    </>
  );
};

export default Home;