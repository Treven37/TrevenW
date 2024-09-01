import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from './utils/theme';
import './styles/styleglobal.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  	<ThemeProvider>
		<App />
	</ThemeProvider>
  </React.StrictMode>,
)
