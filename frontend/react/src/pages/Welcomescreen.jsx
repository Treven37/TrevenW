//hooks

//assets
import WelcomeChess from '../assets/WelcomeChess.svg'
import FingerPrint from '../assets/FingerPrint.svg'
//components
import LinkButton from '../components/Button/LinkButton'
import NormalText from '../components/Text/NormalText'
import AnchorText from '../components/Text/AnchorText'
import Space from '../components/Space'
//styles
import '../styles/styleglobal.scss'



const Welcomescreen = () => {
  
	return (
		<>
		<div className='main'>
			<Space Flex='7%' />
			<NormalText style='text2' text='Social meets Strategy' size='30px'/>
			<Space Flex='55%' />
			<LinkButton path='/login' onClick={null} style='button2' text='Log in' />
			<LinkButton path='/signup' onClick={null} style='button1' text='Register' />
			
			
			<Space Flex='2%' />
			<AnchorText style='text1' text='Stay Anonymous' />
			<img src={WelcomeChess} className='welcomeimg1' />
			<img src={FingerPrint} className='welcomeimg2' />
			<p className='welcomeimg3'> </p>
		</div>
		</>
	)
};

export default Welcomescreen