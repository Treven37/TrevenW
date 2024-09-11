import axios from 'axios'
//hooks

//assets
import Defaultpf from '../assets/4.svg'
import BG from '../assets/userbg.jpeg'
//components
import Botnav from '../components/Botnav'
import Userbotnav from '../components/Userbotnav'
import NormalText from '../components/Text/NormalText'
import Space from '../components/Space'
//styles
import '../styles/styleglobal.scss'

const User = () => {
	
	return (
	<>
	<div className='mainScrollable'>
			
			
			
		
		<div className='row' style={{justifyContent: 'center', alignItems: 'center', marginTop: '-7px'}}>
			
		</div>
		<Userbotnav/>
		<div className='row bgNeutral borderAccent' style={{position: 'fixed', borderRadius: '11px', bottom:0, left: 0, height: '77px', width: '100%'}}>
		
		</div>
		
	</div>
	</>
	)
};

export default User