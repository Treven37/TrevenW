import React, {useState} from 'react'
import PropTypes from 'prop-types'
import styles from './NormalButton.module.scss'
import {Link, useNavigate} from 'react-router-dom'

const LinkButton = ({path, onClick, style, text}) => {
  const nav = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true);
    setTimeout(()=>{
      nav(path);
    }, 300)
  }
  return (
    <Link onClick={handleClick} style={{ textDecoration: 'none' }}>
    <button onClick={onClick} className={style == 'button1' ? styles.button1 : (style == 'button2' ? styles.button2 : styles.button1o)}>
      {text}
    </button>
    </Link>
  );
};

// Define prop types
LinkButton.propTypes = {
  style: PropTypes.string,
  text: PropTypes.string
};

// Define default props
LinkButton.defaultProps = {
  style: 'button1'
};

export default LinkButton
