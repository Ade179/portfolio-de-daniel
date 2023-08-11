import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

function Card({ emoji, heading, detail }) {
  return (
    <div className="card">
      <img src={emoji} alt="" className="animated-image" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button" type="submit"> LEARN MORE</button>
    </div>
  );
}

Card.propTypes = {
  emoji: PropTypes.string.isRequired, // Define the prop type and mark it as required
  heading: PropTypes.string.isRequired, // Define the prop type and mark it as required
  detail: PropTypes.string.isRequired, // Define the prop type and mark it as required
};

export default Card;
