import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import trevenLogo from './assets/treven.svg'
import Flashscreen from './pages/Flashscreen.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/styleglobal.scss'


function App() {
	const [Flashing, isFlashing] = useState(true);
	useEffect(() => {
		const timer = () => setTimeout(() => {
			isFlashing(false);
		}, 1737);
		timer();
	}, [Flashing]);
	if (Flashing) {
	 	return(<Flashscreen />)
	} else {
		//if (isLoggedin) {
		return (
			<Router>
      			<Routes>
        			<Route path="/" element={<img src={trevenLogo}/>} />
        			<Route path="/home" element={<img src={trevenLogo}/>} />
        			<Route path="/profile" element={<Flashscreen/>} />
        			<Route path="/post" element={<img/>} />
      			</Routes>
    		</Router>
		)
		//} else {
		//path if not loggedin
		//}
	}
}


export default App
