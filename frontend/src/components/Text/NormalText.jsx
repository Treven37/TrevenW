import React from 'react';
import PropTypes from 'prop-types';
import './NormalText.scss';

const NormalText = ({style, text}) => {
  return (
    <span className={style}>
      {text}
    </span>
  );
};

// Define prop types
NormalText.propTypes = {
  style: PropTypes.string,
  text: PropTypes.string
};

// Define default props
NormalText.defaultProps = {
  style: 'text1'
};

export default NormalText;