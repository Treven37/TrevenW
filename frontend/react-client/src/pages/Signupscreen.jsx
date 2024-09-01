import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
//hooks

//assets

//components
import Space from '../components/Space'
import NormalButton from '../components/Button/NormalButton'
import NormalText from '../components/Text/NormalText'
import AnchorText from '../components/Text/AnchorText'
import Username from '../components/Input/Username'
import Password from '../components/Input/Password'
//styles
import '../styles/styleglobal.scss'
import styles from './Signupscreen.module.scss'

const Signupscreen = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
    	name: '',
    	user: '',
    	pass: '',
    	profilepic: 'd1'
	});
	
	const handleSubmit = (event) => {
    	event.preventDefault();
    	const jsonData = JSON.stringify(formData);
    	alert(jsonData);
    	axios.post('http://localhost:8000/api/signup', JSON.parse(jsonData))
      	.then((response) => {
        	if (response.data.a) {
        		navigate('/home')
        	} else {
				alert('failed');
        	}
      	})
      	.catch((error) => {
        	alert(error);
      	});
	};
	
	return (
	<div className={styles.bg}>
		<div className={styles.top}></div>
		<form className={styles.main} onSubmit={handleSubmit}>
			<Space Flex='11%' />
			<NormalText style='text3' text='Sign up'/>
			<Space Flex='7%' />
			<input className={styles.input} type="text" placeHolder='Email or Contact Number' value={formData.name} onChange={(event) => setFormData({...formData, name: event.target.value})} />
			<Space Flex='3%' />
			<input className={styles.input} type="text" placeHolder='Username' value={formData.user} onChange={(event) => setFormData({...formData, user: event.target.value})} />
			<Space Flex='3%' />
			<input className={styles.input} type="password" placeHolder='Password' value={formData.pass} onChange={(event) => setFormData({...formData, pass: event.target.value})} />
			<Space Flex='7%' />
			<NormalButton style='button2' text='Sign up'/>
		</form>
		<div className={styles.bot}>
			
			<NormalText style='text1' text='Have Account?' />
			<AnchorText location='/login' style='text3' text='Log in' />
			<Space Flex='37%' />
		</div>
	</div>
	)
};

export default Signupscreen