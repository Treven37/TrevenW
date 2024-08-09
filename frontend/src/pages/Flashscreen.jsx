import { useContext } from 'react'
import trevenLogo from '../assets/treven.svg'
import NormalButton from '../components/Button/NormalButton'
import { ThemeContext } from '../utils/theme';
import '../styles/styleglobal.scss'

const FlashScreen = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
  	<>
		
		<img className="logo" src={trevenLogo} alt="treven's logo"/>
		<button onClick={toggleTheme}>
        	Switch to {theme === 'Light' ? 'Dark' : 'Light'} Mode
      	</button>
	</>  
  )
};

export default FlashScreen
