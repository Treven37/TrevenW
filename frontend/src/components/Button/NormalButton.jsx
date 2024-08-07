import React from 'react';
import PropTypes from 'prop-types';
import './NormalButton.scss';

const NormalButton = ({style}) => {
  return (
    <button className={style}>
      Hi
    </button>
  );
};

// Define prop types
NormalButton.propTypes = {
  style: PropTypes.string
};

// Define default props
NormalButton.defaultProps = {
  style: 'button1'
};

export default NormalButton;
