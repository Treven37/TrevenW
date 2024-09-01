//hooks

//assets
import Slogan from '../assets/Slogan.svg'
//components
import LinkButton from '../components/Button/LinkButton'
import AnchorText from '../components/Text/AnchorText'
import Space from '../components/Space'
//styles
import '../styles/styleglobal.scss'



const Welcomescreen = () => {
  
	return (
		<>
		<div className='main'>
			<Space Flex='70%' />
			<LinkButton path='/login' onClick={null} style='button1' text='Log in' />
			<LinkButton path='/signup' onClick={null} style='button2' text='Sign up' />
			<Space Flex='3%' />
			<AnchorText style='text1' text='Stay Anonymous' />
			<img src={Slogan} className='fullscreenimg' />
		</div>
		</>
	)
};

export default Welcomescreen