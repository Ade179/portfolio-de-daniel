import React from 'react';
import './Services.css';
import Card from '../Card/Card';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Resume from './_Resume.pdf';

function Services() {
  return (
    <div className="services">
      <div className="s-left">
        <span> My Awesome </span>
        <span> services </span>
        <span>
          Innovative solutions | Cutting-edge tech | Seamless user experiences
          <br />
          | Problem-solving prowess | Creative coding
        </span>
        <a href={Resume} download>
          <button className="button s-button" type="submit">Download cv </button>
        </a>
        <div className="blur" style={{ background: 'rgb 238 210 255' }} />
        <div className="blurs" />
      </div>

      <div className="s-right">
        <div style={{ left: '-8rem' }}>
          <Card
            emoji={HeartEmoji}
            heading="Design"
            detail="Figma, sketch, Adobe, wireframes"
          />
        </div>

        <div style={{ left: '-23rem', top: '6rem' }}>
          <Card
            emoji={Glasses}
            heading="Developer"
            detail="HTML, CSS, JavaScript, ReactJS, Ruby, Ruby On Rails"
          />
        </div>

        <div style={{ left: '-8rem', top: '19rem' }}>
          <Card
            emoji={Humble}
            heading="Tools"
            detail="Rspec, git, Github, jest"
          />
        </div>
        <div className="blur" style={{ background: 'rgb 238 210 255' }} />
        <div className="blurs" />
      </div>
    </div>
  );
}

export default Services;
