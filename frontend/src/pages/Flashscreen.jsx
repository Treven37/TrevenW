import { useContext } from 'react'
import trevenLogo from '../assets/treven.svg'
import NormalButton from '../components/Button/NormalButton'
import NormalText from '../components/Text/NormalText'
import { ThemeContext } from '../utils/theme';
import '../styles/styleglobal.scss'

const FlashScreen = () => {
  	const { theme, toggleTheme } = useContext(ThemeContext);
  	return (
  	<>
		<img className="logo" src={trevenLogo} alt="treven's logo"/>
		<NormalButton onClick={toggleTheme} style="button1o" text=""/>
		<div class="div1">
			<NormalText style="text3" text="Treven"/>
			<NormalText style="text1" text="from Project37"/>
		</div>
	</>  
  	)
};

export default FlashScreen
