
import { useState } from 'react'
//hooks
import {Link} from 'react-router-dom'
//assets

//components

//styles
import '../styles/styleglobal.scss'

const Userbotnav = () => {
	const target = String(window.location.href).charAt(String(window.location.href).length - 1);
	
	return (
	<>
	<div className='bgBase borderAccent' style={{background: 'rgb(0,0,0,0.2)', width: '48%', height: '33px', position: 'fixed', bottom: '59px', flexFlow: 'row', zIndex: 2, borderRadius: '37px', padding: '0 3px'}}>
		<Link id='a' to='/user' className={target == 'r' ? 'userbotnavClick' : 'userbotnav'} style={{flex: 1, height: '73%', borderRadius: '21px', margin: '1px'}}>
			User
		</Link>
		<Link id='b' to='/chat' className={target == 't' ? 'userbotnavClick' : 'userbotnav'} style={{flex: 1, height: '73%', borderRadius: '21px', margin: '1px'}}>
			Chat
		</Link>
		<Link id='c' to='/rank' className={target == 'k' ? 'userbotnavClick' : 'userbotnav'} style={{flex: 1, height: '73%', borderRadius: '21px', margin: '1px'}}>
			Rank
		</Link>
	</div>
	
	</>
	)
};

export default Userbotnav
