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
		<div className='main'>
			<Space Flex='75%' />
			<LinkButton path='/login' onClick={null} style='button1' text='Log in' />
			<LinkButton path='/signup' onClick={null} style='button2' text='Sign up' />
			<img src={Slogan} className='fullscreenimg' />
		</div>
	)
};

export default Welcomescreen