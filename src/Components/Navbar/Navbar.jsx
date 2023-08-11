import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import Toggle from '../Toggle/Toggle';

const Navbar = () => (
  <div className="n-wrapper" id="Navbar">
    <div className="n-left">
      <div className="n-name">Daniel</div>
      <Toggle />
    </div>

    <div className="n-right">
      <div className="n-list">
        <ul>
          <Link spy to="Navbar" smooth activeClass="activeClass">
            <li>Home</li>
          </Link>
          <Link spy to="Services" smooth activeClass="activeClass">
            <li>Services</li>
          </Link>
          <Link spy to="Experience" smooth activeClass="activeClass">
            <li>Experience</li>
          </Link>
          <Link spy to="Portfolio" smooth activeClass="activeClass">
            <li>Portfolio</li>
          </Link>
          <Link spy to="Certificates" smooth activeClass="activeClass">
            <li>Certificates</li>
          </Link>
        </ul>
      </div>
      <Link spy to="Contact" smooth activeClass="activeClass">
        <button className="button" type="submit">
          contact
        </button>
      </Link>
    </div>
  </div>
);

export default Navbar;
