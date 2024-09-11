import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
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
import Chat from './pages/Chat.jsx'
import Rank from './pages/Rank.jsx'
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
	const [isLoggedin, setIsLoggedin] = useState(localStorage.getItem('token') !== null);
	
	var time = localStorage.getItem('time');
	
	
	useEffect(() => {
			const timer = setTimeout(() => {
				localStorage.setItem('flash', 'false');
				setIsFlashing(false);
				setInterval(()=>{
					time++;
					localStorage.setItem('time', time);
					if (time >= 11) {
						localStorage.setItem('flash', 'true');
						setIsFlashing(false);
						localStorage.setItem('time', 0);
						time = 0;
					}
				}, 1000);
			}, 2637);
			if (isLoggedin) {
				const token = localStorage.getItem('token');
				for(let i=0; i < localStorage.length; i++) {
					if (localStorage.key(i) != 'token') localStorage.removeItem(localStorage.key(i));
				}
    			const headers = { Authorization: `${token}`};
				axios.post('http://localhost:8000/api/user/getPrivateData', null, {headers:headers})
      			.then((response) => {
      			  localStorage.setItem('user', response.data.user);
					localStorage.setItem('followers', response.data.followers);
					localStorage.setItem('elo', response.data.elo);
					localStorage.setItem('bio', response.data.bio);
 		     	})
      			.catch((error) => {
        			console.error(error);
   		   	});
			}
	}, []);
	
	if (isFlashing) {
		return (<><Flashscreen /></>);
		return () => clearTimeout(timer);
	} else {
		
		if (isLoggedin) {
			return (
				<Router>
      				<Routes>
        				<Route path="/home" element={<><Home/></>} />
        				<Route path="*" element={<><LinkButton path='/' text='Log out' style="button1o"/></>} />
        				<Route path="/user" element={<><User/></>} />
        				<Route path="/chat" element={<><Chat/></>} />
        				<Route path="/rank" element={<><Rank/></>} />
        				<Route path="/game" element={<><Game/></>} />
      				</Routes>
    			</Router>
			)
		} else {
			return (
				<Router>
      				<Routes>
      				  <Route path="*" element={<><div class="loader"></div></>} />
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
