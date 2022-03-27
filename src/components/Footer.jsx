import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import '../styles/App.css';

function Foot() {
  return(
    <>
    <footer className="d-flex py-3 px-5">
        <p>&copy; 2022 Kawolegal. All Right Reserved</p>
        <ul className="ms-auto d-flex">
          <li><FaFacebookF /></li>
          <li><FaTwitter /></li>
          <li><FaLinkedinIn /></li>
          <li><FaInstagram /></li>
        </ul>
      </footer>
    </>
  );
};

export default Foot;