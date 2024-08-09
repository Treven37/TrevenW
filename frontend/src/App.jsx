import { useState } from 'react'
import reactLogo from './assets/react.svg'
import trevenLogo from './assets/treven.svg'
import Flashscreen from './pages/Flashscreen.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/styleglobal.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/a" element={<Flashscreen />} />
        <Route path="/b" element={<img/>} />
        <Route path="/c" element={<img/>} />
      </Routes>
    </Router>
  )
}

export default App
