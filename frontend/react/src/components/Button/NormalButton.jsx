import React from 'react'
import PropTypes from 'prop-types'
import styles from './NormalButton.module.scss'

const NormalButton = ({onClick, style, text, type}) => {
  return (
    <button type={type} onClick={onClick} className={style == 'button1' ? styles.button1 : (style == 'button2' ? styles.button2 : styles.button1o)}>
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

export default NormalButton

