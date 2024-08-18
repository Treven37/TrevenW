import trevenLogo from '../assets/treven.svg'
import NormalButton from '../components/Button/NormalButton'
import NormalText from '../components/Text/NormalText'
import Space from '../components/Space'
import '../styles/styleglobal.scss'

import styles from './Flashscreen.module.scss'

const FlashScreen = () => {
  	
  	return (
  	<>
  	  <Space Flex='80%' />
		<img className="logo" src={trevenLogo} alt="treven's logo"/>
		<Space Flex='90%' />
		<NormalText style="text3" text="WiseBoard"/>
		<NormalText style="text1" text="from Treven"/>
	  </>  
  	)
};

export default FlashScreen
