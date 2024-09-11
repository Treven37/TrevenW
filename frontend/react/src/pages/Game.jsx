//hooks

//assets

//components
import Botnav from '../components/Botnav'
import Space from '../components/Space'
//styles
import '../styles/styleglobal.scss'

const Game = () => {
	return (
	<>
	<div className='main'>
		<Space Flex='30' />
		<p>Will replace React into Angular. Still learning Angular.</p>
		
		<Botnav Nav={1}/>
	</div>
	
	</>
	)
};

export default Game