import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <div className="n-wrapper">
    <div className="n-left">
      <div className="n-name">Daniel</div>
      <span>toggle</span>
    </div>

    <div className="n-right">
      <div className="n-list">
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Experience</li>
          <li>Portfolio</li>
          <li>Certificates</li>
        </ul>
      </div>
      <button className="button" type="submit">
        contact
      </button>
    </div>
  </div>
);

export default Navbar;
