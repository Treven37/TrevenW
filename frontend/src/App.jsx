import { useState, useEffect, useContext } from 'react'
import reactLogo from './assets/react.svg'
import trevenLogo from './assets/treven.svg'

//pages
import Flashscreen from './pages/Flashscreen.jsx'
import Welcomescreen from './pages/Welcomescreen.jsx'
import Loginscreen from './pages/Loginscreen.jsx'
import Signupscreen from './pages/Signupscreen.jsx'
import Forgot from './pages/Forgot.jsx'
import Verification from './pages/Verification.jsx'
import Home from './pages/Home.jsx'
import User from './pages/User.jsx'
import Post from './pages/Post.jsx'
import { ThemeContext } from './utils/theme';

import NormalButton from './components/Button/NormalButton'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/styleglobal.scss'

function App() {
	if (localStorage.getItem('flash') == null) {
		localStorage.setItem('flash', 'true');
	}
	const { theme, toggleTheme } = useContext(ThemeContext);
	const [isFlashing, setIsFlashing] = useState(localStorage.getItem('flash') == 'true');
	const [isLoggedin, setIsLoggedin] = useState(false);

	useEffect(() => {
		if (localStorage.getItem('flash') == 'true') {
			const timer = setTimeout(() => {
				localStorage.setItem('flash', 'false');
				setIsFlashing(false);
			}, 2637);
			return () => clearTimeout(timer); // Cleanup the timer
		} else {
			//alert('hi');
			const timer2 = setTimeout(() => {
				localStorage.setItem('flash', 'true');
				setIsFlashing(false);
			}, 37373);
			return () => clearTimeout(timer2); // Cleanup the timer
		}
	}, []);
	
	if (isFlashing) {
		return (<><Flashscreen /></>);
	} else {
		if (isLoggedin) {
			return (
				<Router>
      				<Routes>
        				<Route path="/" element={<><Home/><NormalButton onClick={toggleTheme} style="button1o" text="Switch Mode"/></>} />
        				<Route path="/user" element={<><User/><NormalButton onClick={toggleTheme} style="button1o" text="Switch Mode"/></>} />
        				<Route path="/post" element={<><Post/><NormalButton onClick={toggleTheme} style="button1o" text="Switch Mode"/></>} />
      				</Routes>
    			</Router>
			)
		} else {
			return (
				<Router>
      				<Routes>
        				<Route path="/" element={<><Welcomescreen/></>} />
        				<Route path="/login" element={<><Loginscreen/><NormalButton onClick={toggleTheme} style="button1o" text="Switch Mode"/></>} />
        				<Route path="/signup" element={<><Signupscreen/><NormalButton onClick={toggleTheme} style="button1o" text="Switch Mode"/></>} />
        				<Route path="/verification" element={<><Verification/><NormalButton onClick={toggleTheme} style="button1o" text="Switch Mode"/></>} />
        				<Route path="/forgot" element={<><Forgot/><NormalButton onClick={toggleTheme} style="button1o" text="Switch Mode"/></>} />
      				</Routes>
    			</Router>
			)
		}
		
	}
}

export default App;
