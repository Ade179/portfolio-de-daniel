/* eslint-disable no-unused-vars */
import React from 'react';
import './Experience.css';
import { themeContext } from '../../Context';

function Experience() {
  return (
    <div className="experience">
      <div className="achievement">
        <div className="circle">2+</div>
        <span>years</span>
        <span>Experience</span>
      </div>

      <div className="achievement">
        <div className="circle">20+</div>
        <span>completed</span>
        <span>Projects</span>
      </div>

      <div className="achievement">
        <div className="circle">1+</div>
        <span>companies</span>
        <span>worked</span>
      </div>
    </div>
  );
}

export default Experience;
