import React, {useState} from 'react'
//styles
import '../../styles/styleglobal.scss'


const InputChar =() => {
	const [val, setVal] = useState('');
	return (
	<>
		<input type='number' className='veri' value={val} onChange={ (event) => val == '' ? setVal(event.target.value) : setVal((event.target.value+'').charAt((event.target.value+'').length - 1)) }/>
	</>
	);
};

export default InputChar;