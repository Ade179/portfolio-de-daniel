/* eslint-disable no-unused-vars */
/* eslint-enable jsx-a11y/no-static-element-interactions */
import React, { useContext } from 'react';
import './Toggle.css';
import Sun from '@iconscout/react-unicons/icons/uil-sun';
import Moon from '@iconscout/react-unicons/icons/uil-moon';
import { themeContext } from '../../Context';

const Toggle = () => {
  const theme = useContext(themeContext);
  const { darkMode } = theme.state;
  const handleClick = () => {
    theme.dispatch({ type: 'toggle' });
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };
  return (
    <div
      className="toggle"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex="0"
    >
      <Moon />
      <Sun />
      <div
        className="t-button"
        style={darkMode ? { left: '2px' } : { right: '2px' }}
      />
    </div>
  );
};

export default Toggle;
