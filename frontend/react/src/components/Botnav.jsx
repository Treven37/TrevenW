
import { useState } from 'react'
//hooks
import {Link} from 'react-router-dom'
//assets
import Defaultpf from '../assets/mori.png'
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
		<img src={localStorage.getItem('profilepic') ? localStorage.getItem('profilepic') : Defaultpf} id='botimg' style={{height: '28px', width: '28px', borderRadius: '50%', border: '1px solid rgb(138, 43, 226)', bottom: '1%', left: '7%', position: 'fixed', background: 'white'}}/>
		<img src={Nav == 0 ? homeNav : (Nav == 1 ? gameNav : userNav)} style={{width: '100%'}}/>
	</div>
	</>
	)
};

export default Botnav
