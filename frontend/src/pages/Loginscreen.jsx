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

const Loginscreen = () => {
	return (
	<div className={styles.main}>
		<Space Flex='11%' />
		<CircleImg size='111px'/>
		<Space Flex='2%' />
		<form className={styles.container}>
			<Space Flex='11%' />
			<Username />
			<Space Flex='4%' />
			<Password />
			<Space Flex='1%' />
			<div className='row' style={{alignItems: 'right'}}>
				<Space Flex='58%' />
				<AnchorText location="/forgot" style="text3" size='11px' text="Forgot Password?"/>
			</div>
			<Space Flex='11%' />
			<NormalButton text='Log in' style='button2'/>
			<NormalButton text='Log in with..' style='button1'/>
		</form>
		<Space Flex='3%' />
		<NormalText style='text1' text='No Account?' />
		<AnchorText location='/signup' style='text2' text='Sign up' />
	</div>  
	)
};

export default Loginscreen