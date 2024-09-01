import React from 'react'
//hooks

//assets
import homeNav from '../assets/home.svg'
//components

//styles
import '../styles/styleglobal.scss'

const Botnav = () => {
	return (
	<div style={{width: '100%', position: 'fixed', bottom: 0}}>
		<img style={{width: '100%'}} src={homeNav} />
	</div>
	)
};

export default Botnav
