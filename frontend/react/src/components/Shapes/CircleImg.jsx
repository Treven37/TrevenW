import React from 'react'
import PropTypes from 'prop-types'
import Treven from '../../assets/treven.svg'
//hooks

//assets

//components

//styles
import '../../styles/styleglobal.scss'
import styles from './CircleImg.module.scss'

const CircleImg = ({img, size}) => {
	return (
	<div className={styles.circle} style={{borderRadius: '50%', height: `${size}`, width: `${size}`}}>
		<img className={styles.img} src={Treven} />
	</div>
	)
};

CircleImg.propTypes = {
	img: PropTypes.string,
}

export default CircleImg