//hooks

//assets

//components
import Space from '../components/Space'
import InputChar from '../components/Input/InputChar'
import NormalText from '../components/Text/NormalText'
import LinkButton from '../components/Button/LinkButton'
//styles
import '../styles/styleglobal.scss'



const Verification = () => {
	const auth = "09772549422";
	return (
	<form className='main'>
		<Space Flex='26%'/>
		<NormalText style='text2' text='Verification' size='37px'/>
		<NormalText style='text1' text='Enter the verification we sent to' size='15px'/>
		<NormalText style='text1' text={auth} size='18px'/>
		<Space Flex='7%'/>
		<div className='row'>
			<InputChar />
			<InputChar />
			<InputChar />
			<InputChar />
		</div>
		<Space Flex='7%'/>
		<LinkButton location='/verification' style='button1' text='Confirm'/>
		<Space Flex='37%'/>
		<NormalText style='text1' text='73s' size='13px'/>
	</form>  
	)
};

export default Verification