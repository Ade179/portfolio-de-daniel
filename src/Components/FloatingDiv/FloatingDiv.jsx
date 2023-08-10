import React from 'react';
import PropTypes from 'prop-types';
import './FloatingDiv.css';

function FloatingDiv({ image, txt1, txt2 }) {
  return (
    <div className="floatingdiv">
      <img src={image} alt="" srcSet="" />
      <span>
        {txt1}
        <br />
        {txt2}
      </span>
    </div>
  );
}

FloatingDiv.propTypes = {
  image: PropTypes.string.isRequired, // Define the prop type and mark it as required
  txt1: PropTypes.string.isRequired, // Define the prop type and mark it as required
  txt2: PropTypes.string.isRequired, // Define the prop type and mark it as required
};

export default FloatingDiv;
