import { useState, useEffect, useContext } from 'react'
import reactLogo from './assets/react.svg'
import trevenLogo from './assets/treven.svg'

//pages
import Flashscreen from './pages/Flashscreen.jsx'
import Welcomescreen from './pages/Welcomescreen.jsx'
import Loginscreen from './pages/Loginscreen.jsx'
import Signupscreen from './pages/Signupscreen.jsx'
import Verification from './pages/Verification.jsx'
import Home from './pages/Home.jsx'
import User from './pages/User.jsx'
import Post from './pages/Post.jsx'
import { ThemeContext } from './utils/theme';

import NormalButton from './components/Button/NormalButton'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/styleglobal.scss'

function App() {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const [isFlashing, setIsFlashing] = useState(true);
	const [isLoggedin, setIsLoggedin] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsFlashing(false);
		}, 1373337);

		return () => clearTimeout(timer); // Cleanup the timer
	}, [isFlashing]);
	
	if (isFlashing) {
	 	return (<><Flashscreen /><NormalButton onClick={toggleTheme} style="button1o" text="Switch Mode"/></>);
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
        				<Route path="/" element={<><Welcomescreen/><NormalButton onClick={toggleTheme} style="button1o" text="Switch Mode"/></>} />
        				<Route path="/login" element={<><Loginscreen/><NormalButton onClick={toggleTheme} style="button1o" text="Switch Mode"/></>} />
        				<Route path="/signup" element={<><Signupscreen/><NormalButton onClick={toggleTheme} style="button1o" text="Switch Mode"/></>} />
        				<Route path="/verification" element={<><Verification/><NormalButton onClick={toggleTheme} style="button1o" text="Switch Mode"/></>} />
      				</Routes>
    			</Router>
			)
		}
	}
}

export default App;
