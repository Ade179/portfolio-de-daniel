import React, { useContext } from 'react';
import './Experience.css';
import { themeContext } from '../../Context';

function Experience() {
  const theme = useContext(themeContext);
  const { darkMode } = theme.state;

  return (
    <div className={`experience ${darkMode ? 'dark-mode' : ''}`} id="Experience">
      <div className="achievement">
        <div className={`circle ${darkMode ? 'dark-mode-circle' : ''}`}>2+</div>
        <span>years</span>
        <span>Experience</span>
      </div>

      <div className="achievement">
        <div className={`circle ${darkMode ? 'dark-mode-circle' : ''}`}>20+</div>
        <span>completed</span>
        <span>Projects</span>
      </div>

      <div className="achievement">
        <div className={`circle ${darkMode ? 'dark-mode-circle' : ''}`}>1+</div>
        <span>companies</span>
        <span>worked</span>
      </div>
    </div>
  );
}

export default Experience;
