//hooks

//assets

//components
import Botnav from '../components/Botnav'
import Space from '../components/Space'
//styles
import '../styles/styleglobal.scss'

const Home = () => {
	return (
	<>
	<div className='main'>
		<Space Flex='30' />
		<p>Testing </p>
		
		<Botnav Nav={0}/>
	</div>
	
	</>
	)
};

export default Home