import React, {useState} from 'react'
import axios from 'axios'
//hooks

//assets
import Treven from '../assets/treven.svg'
//components
import Password from '../components/Input/Password'
import Username from '../components/Input/Username'
import Space from '../components/Space'
import CircleImg from '../components/Shapes/CircleImg'
import NormalButton from '../components/Button/NormalButton'
import NormalText from '../components/Text/NormalText'
import AnchorText from '../components/Text/AnchorText'
//styles
import '../styles/styleglobal.scss'
import styles from './Loginscreen.module.scss'
import inputs from '../components/Input/Username.module.scss'

const Loginscreen = () => {
	const [formData, setFormData] = useState({
    	name: '',
    	pass: ''
	});
	
	const handleSubmit = (event) => {
    	event.preventDefault();
    	const jsonData = JSON.stringify(formData);
    	axios.post('/api/endpoint', jsonData)
      	.then((response) => {
        	console.log(response.data);
      	})
      	.catch((error) => {
        	console.error(error);
      	});
	};
  
	return (
	<div className={styles.main}>
		<Space Flex='11%' />
		<CircleImg size='111px'/>
		<Space Flex='2%' />
		<form className={styles.container}>
			<Space Flex='11%' />
			<label className={styles.label}>Username:</label>
        	<input className={styles.input} type="text" placeHolder='Username, Email, or Contact Num..' value={formData.name} onChange={(event) => setFormData({...formData, name: event.target.value})} />
			<Space Flex='4%' />
			<label className={styles.label}>Password:</label>
        	<input className={styles.input} type="password" placeHolder='Password' value={formData.pass} onChange={(event) => setFormData({...formData, pass: event.target.value})} />
			<Space Flex='1%' />
			<div className='row' style={{alignItems: 'right'}}>
				<Space Flex='58%' />
				<AnchorText location="/forgot" style="text3" size='11px' text="Forgot Password?"/>
			</div>
			<Space Flex='11%' />
			<NormalButton text='Log in' style='button2' type='submit'/>
			<NormalButton text='Log in with..' style='button1'/>
		</form>
		<Space Flex='3%' />
		<NormalText style='text1' text='No Account?' />
		<AnchorText location='/signup' style='text2' text='Sign up' />
	</div>  
	)
};

export default Loginscreen