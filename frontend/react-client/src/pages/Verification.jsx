import axios from 'axios'
import {useNavigate} from 'react-router-dom'
//hooks
import React, {useState} from 'react'
//assets

//components
import Space from '../components/Space'
import InputChar from '../components/Input/InputChar'
import NormalText from '../components/Text/NormalText'
import NormalButton from '../components/Button/NormalButton'
//styles
import '../styles/styleglobal.scss'



const Verification = () => {
	const navigate = useNavigate();
	const [val, setVal] = useState('');
	const [val2, setVal2] = useState('');
	const [val3, setVal3] = useState('');
	const [val4, setVal4] = useState('');
	const auth = localStorage.getItem('auth');
	const isNum = !isNaN(Number(auth));
	
	const handleSubmit = (event) => {
    	event.preventDefault();
    	axios.post('http://localhost:8000/api/verify', {
			'incode': val+val2+val3+val4,
			'name': localStorage.getItem('auth'),
			'user': localStorage.getItem('user'),
			'pass': localStorage.getItem('pass'),
			'profilepic': localStorage.getItem('profilepic'),
			'code': localStorage.getItem('code'),
			'msg': localStorage.getItem('msg')
		})
      	.then((response) => {
        	if(response.data.a) {
        		localStorage.setItem('finalToken', response.data.token);
        		navigate('/home');
        		window.location.reload();
        	} else {
        		alert(response.data.msg)
        		//window.location.reload();
        	}
      	})
      	.catch((error) => {
        	alert(error);
      	});
	};
	
	return (
	<form className='main' onSubmit={handleSubmit}>
		<Space Flex='26%'/>
		<NormalText style='text2' text='Verification' size='37px'/>
		<NormalText style='text1' text='Enter the verification code we sent to' size='15px'/>
		<NormalText style='text1' text={auth} size='18px'/>
		<Space Flex='7%'/>
		<div className='row'>
			<input type='number' className='veri' value={val} onChange={ (event) => val == '' ? setVal(event.target.value) : setVal((event.target.value+'').charAt((event.target.value+'').length - 1)) }/>
			<input type='number' className='veri' value={val2} onChange={ (event) => val2 == '' ? setVal2(event.target.value) : setVal2((event.target.value+'').charAt((event.target.value+'').length - 1)) }/>
			<input type='number' className='veri' value={val3} onChange={ (event) => val3 == '' ? setVal3(event.target.value) : setVal3((event.target.value+'').charAt((event.target.value+'').length - 1)) }/>
			<input type='number' className='veri' value={val4} onChange={ (event) => val4 == '' ? setVal4(event.target.value) : setVal4((event.target.value+'').charAt((event.target.value+'').length - 1)) }/>
		</div>
		<Space Flex='7%'/>
		<NormalButton style='button1' text='Confirm'/>
		<Space Flex='37%'/>
		<NormalText style='text1' text='73s' size='13px'/>
	</form>  
	)
};

export default Verification