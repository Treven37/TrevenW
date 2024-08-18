import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './NormalText.module.scss';

const AnchorText = ({location,  style, text}) => {
	return (
    	<Link to={location} className={'style.'+style}>
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