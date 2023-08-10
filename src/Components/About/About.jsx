import React from 'react';
import './About.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glasses.png';

const About = () => (
  <div className="a-wrapper">
    <div className="a-left">
      <div className="a-name">
        <span>Hi! I Am</span>
        <span>Daniel Jay Adesanya</span>
        <span>
          Full-Stack Developer with experience in
          web devlopment and design, while producing high quality work
        </span>
      </div>
      <button className="a-left-button button" type="submit">
        Hire me
      </button>
      <div className="a-icons">
        <img src={Github} alt="github" />
        <img src={LinkedIn} alt="linkedin" />
        <img src={Instagram} alt="IG" />
      </div>
      <div className="blur" style={{ background: 'rgb 238 210 255' }} />
      <div className="blurs" />
    </div>
    <div className="a-right">
      <img src={Vector1} alt="" srcSet="" />
      <img src={Vector2} alt="" srcSet="" />
      <img src={boy} alt="" srcSet="" />
      <img src={glassesimoji} alt="" srcSet="" />
      <div style={{ top: '-4%', left: '68%' }}>
        <FloatingDiv image={Crown} txt1="web" txt2="Developer" />
      </div>
      <div style={{ top: '18rem', left: '0rem ' }}>
        <FloatingDiv image={thumbup} txt1="Great" txt2="Designer" />
      </div>
      <div className="blur" style={{ background: 'rgb 238 210 255' }} />
      <div className="blurs" />
    </div>
  </div>
);

export default About;
