import { useState, useEffect, useContext } from 'react'
import reactLogo from './assets/react.svg'
import trevenLogo from './assets/treven.svg'

//pages
//import Other from './pages/Other.jsx'
import Flashscreen from './pages/Flashscreen.jsx'
import Welcomescreen from './pages/Welcomescreen.jsx'
import Loginscreen from './pages/Loginscreen.jsx'
import Signupscreen from './pages/Signupscreen.jsx'
import Forgot from './pages/Forgot.jsx'
import Verification from './pages/Verification.jsx'
import Home from './pages/Home.jsx'
import User from './pages/User.jsx'
import Game from './pages/Game.jsx'
import { ThemeContext } from './utils/theme';

import NormalButton from './components/Button/NormalButton'
import LinkButton from './components/Button/LinkButton'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './styles/styleglobal.scss'



function App() {
	//localStorage.clear();
	//
	if (localStorage.getItem('flash') == null) {
		localStorage.setItem('flash', 'true');
	}
	if (localStorage.getItem('time') == null) {
		localStorage.setItem('time', 0);
	}
	const { theme, toggleTheme } = useContext(ThemeContext);
	const [isFlashing, setIsFlashing] = useState(localStorage.getItem('flash') == 'true');
	const [isLoggedin, setIsLoggedin] = useState(localStorage.getItem('finalToken') !== null);
	
	var time = localStorage.getItem('time');
	
	
	useEffect(() => {
			const timer = setTimeout(() => {
				localStorage.setItem('flash', 'false');
				setIsFlashing(false);
				setInterval(()=>{
					time++;
					localStorage.setItem('time', time);
					if (time != 0) {
						localStorage.setItem('flash', 'true');
						setIsFlashing(false);
						localStorage.setItem('time', 0);
						time = 0;
					}
				}, 1000);
			}, 2637);
		
	}, []);
	
	if (isFlashing) {
		return (<><Flashscreen /></>);
		return () => clearTimeout(timer);
	} else {
		
		if (isLoggedin) {
			return (
				<Router>
      				<Routes>
        				<Route path="/home" element={<><Home/> <LinkButton path='/' text='Log out' style="button1o"/></>} />
        				<Route path="*" element={<><LinkButton path='/' text='Log out' style="button1o"/></>} />
        				<Route path="/user" element={<><User/><NormalButton onClick={toggleTheme} style="button1o" text="Switch Mode"/></>} />
        				<Route path="/game" element={<><Game/><NormalButton onClick={toggleTheme} style="button1o" text="Switch Mode"/></>} />
      				</Routes>
    			</Router>
			)
		} else {
			return (
				<Router>
      				<Routes>
      				  <Route path="*" element={<><LinkButton path='/' text='Log out' style="button1o"/></>} />
        				<Route path="/" element={<><Welcomescreen/></>} />
        				<Route path="/login" element={<><Loginscreen/></>} />
        				<Route path="/signup" element={<><Signupscreen/></>} />
        				<Route path="/verification" element={<><Verification/></>} />
        				<Route path="/forgot" element={<><Forgot/></>} />
      				</Routes>
    			</Router>
			)
		}
		
	}
}

export default App;