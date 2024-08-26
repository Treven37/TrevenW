import trevenLogo from '../assets/treven.svg'
import NormalButton from '../components/Button/NormalButton'
import NormalText from '../components/Text/NormalText'
import Space from '../components/Space'
import '../styles/styleglobal.scss'

import styles from './Flashscreen.module.scss'

const FlashScreen = () => {
  	
  	return (
  	<div className='main'>
  	  <Space Flex='40%' />
		<img className="logo" src={trevenLogo} alt="treven's logo"/>
		<Space Flex='21%' />
		<NormalText style="text3" text="Treven"/>
		<NormalText style="text1" text="from Project 37"/>
	  </div>  
  	)
};

export default FlashScreen
