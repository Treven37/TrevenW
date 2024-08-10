import trevenLogo from '../assets/treven.svg'
import NormalButton from '../components/Button/NormalButton'
import NormalText from '../components/Text/NormalText'

import '../styles/styleglobal.scss'

const FlashScreen = () => {
  	
  	return (
  	<>
		<img className="logo" src={trevenLogo} alt="treven's logo"/>
		<div class="div1">
			<NormalText style="text3" text="Treven"/>
			<NormalText style="text1" text="from Project37"/>
		</div>
	</>  
  	)
};

export default FlashScreen
