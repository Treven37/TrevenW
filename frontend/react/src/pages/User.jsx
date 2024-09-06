import axios from 'axios'
//hooks

//assets
import Defaultpf from '../assets/4.svg'
import BG from '../assets/userbg.jpeg'
//components
import Botnav from '../components/Botnav'
import NormalText from '../components/Text/NormalText'
import Space from '../components/Space'
//styles
import '../styles/styleglobal.scss'

const User = () => {
	
	return (
	<>
	<div className='mainScrollable'>
			
			
			
		<img className='borderBase' src={BG} style={{top: 0, height: '237px', width: '100%', borderRadius: '1%', background: 'white', display: 'fixed'}}/>
		<img className='borderAccent' src={Defaultpf} id='botimg' style={{height: '73px', width: '74px', borderRadius: '50%', background: 'white', marginTop: '-37px'}}/>
		<svg style={{marginTop: '-84px', marginLeft: '62px', opacity: '0.9', height: '37px', width: '37px', borderRadius: '50%', top: '28%'}} fill="#4169E1" height="256px" width="256px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-243.5 -243.5 974.00 974.00" xml:space="preserve" transform="rotate(0)" stroke="#4169E1" stroke-width="0.00487"><g id="SVGRepo_bgCarrier" stroke-width="0"><path transform="translate(-243.5, -243.5), scale(30.4375)" d="M16,26.38109475839883C18.38414487099472,26.35205030536666,20.698428641297724,27.534249743216634,22.99049507140193,26.877422653236536C25.705553149872795,26.09938076344371,28.737802200147,24.921336524326346,29.967161031450637,22.378588716218342C31.197824314431173,19.83314284180312,29.945355156013996,16.82461202814823,29.164589103730584,14.107217837520803C28.471106983859336,11.693608436432141,27.483787162598126,9.364624317485994,25.715603731875074,7.581381443696461C24.018011287030795,5.869330772217424,21.728210135107393,5.045350357677813,19.43651817783776,4.296293895527011C17.079316345758077,3.5258250463817458,14.692051090006021,2.8446967408422417,12.234207129298243,3.1748872759508977C9.509116018721835,3.54098020390144,6.48817987670468,4.122358697198676,4.767469023164477,6.266956503629267C3.055910312811526,8.400147590468858,3.331464737866267,11.45393602610162,3.397810008510996,14.188078622423182C3.4555426319692746,16.567287019053826,4.188184172865571,18.77869900533783,5.124168346166398,20.966825893280916C6.082018244576118,23.206070078289414,6.718906507650704,25.9636902749344,8.899182467853057,27.049087752977165C11.071427537222936,28.130487246904565,13.573644751554609,26.410653432416588,16,26.38109475839883" fill="#8A2BE2" strokewidth="0"></path></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#1c1c1c" stroke-width="13.636000000000001"> <g> <g> <path d="M308.1,277.95c0,35.7-28.9,64.6-64.6,64.6s-64.6-28.9-64.6-64.6s28.9-64.6,64.6-64.6S308.1,242.25,308.1,277.95z M440.3,116.05c25.8,0,46.7,20.9,46.7,46.7v122.4v103.8c0,27.5-22.3,49.8-49.8,49.8H49.8c-27.5,0-49.8-22.3-49.8-49.8v-103.9 v-122.3l0,0c0-25.8,20.9-46.7,46.7-46.7h93.4l4.4-18.6c6.7-28.8,32.4-49.2,62-49.2h74.1c29.6,0,55.3,20.4,62,49.2l4.3,18.6H440.3z M97.4,183.45c0-12.9-10.5-23.4-23.4-23.4c-13,0-23.5,10.5-23.5,23.4s10.5,23.4,23.4,23.4C86.9,206.95,97.4,196.45,97.4,183.45z M358.7,277.95c0-63.6-51.6-115.2-115.2-115.2s-115.2,51.6-115.2,115.2s51.6,115.2,115.2,115.2S358.7,341.55,358.7,277.95z"></path> </g> </g> </g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M308.1,277.95c0,35.7-28.9,64.6-64.6,64.6s-64.6-28.9-64.6-64.6s28.9-64.6,64.6-64.6S308.1,242.25,308.1,277.95z M440.3,116.05c25.8,0,46.7,20.9,46.7,46.7v122.4v103.8c0,27.5-22.3,49.8-49.8,49.8H49.8c-27.5,0-49.8-22.3-49.8-49.8v-103.9 v-122.3l0,0c0-25.8,20.9-46.7,46.7-46.7h93.4l4.4-18.6c6.7-28.8,32.4-49.2,62-49.2h74.1c29.6,0,55.3,20.4,62,49.2l4.3,18.6H440.3z M97.4,183.45c0-12.9-10.5-23.4-23.4-23.4c-13,0-23.5,10.5-23.5,23.4s10.5,23.4,23.4,23.4C86.9,206.95,97.4,196.45,97.4,183.45z M358.7,277.95c0-63.6-51.6-115.2-115.2-115.2s-115.2,51.6-115.2,115.2s51.6,115.2,115.2,115.2S358.7,341.55,358.7,277.95z"></path> </g> </g> </g></svg>
		<input type='file' accept='image/*' onChange={(event) => {document.getElementById('botimg').src = URL.createObjectURL(event.target.files[0]); }} style={{height: '25px', width: '37px', border: '3px rgb(65, 105, 225)', top: '28%', zIndex: 5, opacity: 0, marginTop: '-37px', marginLeft: '62px', marginBottom: '59px'}} />
		<NormalText style='text1' size='23px' text={localStorage.getItem('user')} />
		<div className='row' style={{justifyContent: 'center', alignItems: 'center', marginTop: '-7px'}}>
			<NormalText style='text2' text={`${localStorage.getItem('followers')} Followers`} size='17px'/>
			<Space Flex='3%'/>
			<NormalText style='text1' text={`${localStorage.getItem('elo')} ELO`} size='21px'/>
			
		</div>
		<NormalText style='text2' text={`${localStorage.getItem('bio')}`} size='15px'/>
		<Botnav Nav={2}/>
	</div>
	</>
	)
};

export default User