import React from 'react';
import PropTypes from 'prop-types';
import './NormalButton.scss';

const NormalButton = ({onClick, style, text}) => {
  return (
    <button onClick={onClick} className={style}>
      {text}
    </button>
  );
};

// Define prop types
NormalButton.propTypes = {
  style: PropTypes.string,
  text: PropTypes.string
};

// Define default props
NormalButton.defaultProps = {
  style: 'button1'
};

export default NormalButton;
