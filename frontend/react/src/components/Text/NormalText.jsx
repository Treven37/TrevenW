import React from 'react';
import PropTypes from 'prop-types';
import styles from './NormalText.module.scss';

const NormalText = ({style, text, size}) => {
  return (
    <span style={{fontSize: `${size}`}} className={style == 'text1' ? styles.text1 : (style == 'text2' ? styles.text2 : styles.text3)}>
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