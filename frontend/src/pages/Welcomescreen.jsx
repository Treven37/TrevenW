//hooks

//assets
import Slogan from '../assets/Slogan.svg'
//components
import LinkButton from '../components/Button/LinkButton'
import Space from '../components/Space'
//styles
import '../styles/styleglobal.scss'

const Welcomescreen = () => {
	return (
		<>
			<img src={Slogan} className='full-screen-img' />
			<Space Flex='75%' />
			<LinkButton path='/login' onClick={null} style='button1' text='Log in' />
			<LinkButton path='/signup' onClick={null} style='button2' text='Sign up' />
		</>
	)
};

export default Welcomescreen