import React from 'react'
//hooks
import {Link} from 'react-router-dom'
//assets
import homeNav from '../assets/home.svg'
import gameNav from '../assets/game.svg'
import userNav from '../assets/user.svg'
//components

//styles
import '../styles/styleglobal.scss'

const Botnav = ({Nav}) => {
	return (
	<>
	<div style={{width: '100%', height: '7%', position: 'fixed', bottom: 0, background: 'red', opacity: '0', flexFlow: 'row', zIndex: 2}}>
		<Link to='/user' style={{flex: 1, background: 'blue', height: '100%'}}>
			0
		</Link>
		<Link to='/home' style={{flex: 1, background: 'green', height: '100%'}}>
			0
		</Link>
		<Link to='/game' style={{flex: 1, background: 'orange', height: '100%'}}>
			0
		</Link>
	</div>
	<div style={{width: '100%', position: 'fixed', bottom: 0}}>
		<img style={{width: '100%'}} src={Nav == 0 ? homeNav : (Nav == 1 ? gameNav : userNav)} />
	</div>
	</>
	)
};

export default Botnav
