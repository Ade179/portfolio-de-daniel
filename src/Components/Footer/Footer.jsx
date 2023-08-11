import React from 'react';
import './Footer.css';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Github from '@iconscout/react-unicons/icons/uil-github';
import Wave from '../../img/wave.png';

const Footer = () => (
  <div className="footer">
    <img src={Wave} alt="wave" srcSet="" style={{ width: '100%' }} />
    <div className="f-content">
      <span>dnladesanya1@gmail.com</span>
      <div className="f-icons">
        <a href="https://www.instagram.com/jay_iz_just_awesome/">
          <Insta color="white" size="3rem" />
        </a>
        <a href="https://web.facebook.com/adesanya.juwon.5">
          <Facebook color="white" size="3rem" />
        </a>
        <a href="https://github.com/Ade179">
          <Github color="white" size="3rem" />
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
