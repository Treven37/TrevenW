import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './NormalText.module.scss';

const AnchorText = ({location,  style, text, size}) => {
	return (
    	<Link to={location} style={{fontSize: `${size}`}} className={style == 'text1' ? styles.text1 : (style == 'text2' ? styles.text2 : styles.text3)}>
			{text}
    	</Link>
	);
};

// Define prop types
AnchorText.propTypes = {
	style: PropTypes.string,
	text: PropTypes.string
};

// Define default props
AnchorText.defaultProps = {
	style: 'text1'
};

export default AnchorText;