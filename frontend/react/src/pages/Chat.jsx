import axios from 'axios'
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
//hooks

//assets
import Defaultpf from '../assets/4.svg'
import Mori from '../assets/sample1.png'
import My from '../assets/bot.png'
import BG from '../assets/userbg.jpeg'

//components
import Botnav from '../components/Botnav'
import Userbotnav from '../components/Userbotnav'
import NormalText from '../components/Text/NormalText'
import Space from '../components/Space'

//styles
import '../styles/styleglobal.scss'

const User = () => {
	
	const [msg, setMsg] = useState({mesg: ''});
	const HandleMsg = (event) => {
    	event.preventDefault();
    	document.getElementById('loader').style.display = 'block';
    	var data = JSON.stringify(msg);
    	document.getElementById('content').innerHTML = '';
    	function gemini() {
		axios.post('http://localhost:8000/ai/a', JSON.parse(data))
      			.then((response) => {
      			  let msgs = response.data.msg +'<br/><br/><br/>';
                    //setMsg({...msg, mesg: response.data.msg});
      			  msgs = msgs.split(' ');
      			  let i=0;
      			  setInterval(()=>{
      				if(msgs.length == i){
					  	document.getElementById('loader').style.display = 'none';
					  	i=7373;
						  //groq();
					  }else if (msgs.length != i && i < 7373){
					  	document.getElementById('content').innerHTML +=
      			    	msgs[i]+' ';
      					i++;
      					
					  } 
					}, 37)
      			  
 		     	})
      			.catch((error) => {
        			console.error(error);
   		   	});
   		
   	};
   	function groq() {
   	axios.post('http://localhost:8000/ai/b', JSON.parse(data))
      			.then((response) => {
      			  let msgs = '<h3>AI2</h3>'+response.data.msg +'<br/><br/><br/>';
                    //setMsg({...msg, mesg: response.data.msg});
      			  msgs = msgs.split(' ');
      			  let i=0;
      			  
      			  setInterval(()=>{
      				if(msgs.length == i){
					  	document.getElementById('loader').style.display = 'none';
					  	i=7373;
						  gemini();
					  }else if (msgs.length != i && i < 7373){
					  	document.getElementById('content').innerHTML +=
      			    	msgs[i]+' ';
      					i++;
					  } 
					}, 37)
      			  
 		     	})
      			.catch((error) => {
        			console.error(error);
   		   	});
   		data = JSON.stringify(msg);
       };
       groq();
       
   	setMsg({...msg, mesg: ''});
   
	};
	return (
	<>
	<div className='mainScrollable'>
		<Space Flex='11%' />
		<div className='row' style={{alignItems: 'center', marginTop: '-7px'}}>
			
			
			
		</div>
		<Userbotnav/>
		<div style={{justifyContent: 'left', bottom: '95%', margin: '11px', alignItems: 'top'}}>
			<img className='borderAccent' src={Mori} id='botimg' style={{height: '37px', width: '37px', borderRadius: '50%', background: 'white', marginTop: '-37px'}}/>
			<NormalText style='text1' size='11px' text='Mori (you)' />
			<p id='content' style={{fontSize: '26px', marginBottom: '262px', padding: '3px', width: '100%'}}>
			</p>
			
			<div id='loader' style={{display: 'none', marginBottom: '262px'}} class="loader"></div>
		</div>
		<div style={{position: 'fixed', right: '7px', bottom: '84px'}}>
		<Link to="/mess">
			<svg width="44px" height="37px" viewBox="-1.92 -1.92 27.84 27.84" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)" stroke="#4169E1"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-1.92" y="-1.92" width="27.84" height="27.84" rx="13.92" fill="#fbfbfb" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M12 3C4.5885 3 3 4.5885 3 12C3 19.4115 4.5885 21 12 21C19.4115 21 21 19.4115 21 12C21 4.5885 19.4115 3 12 3ZM11.5 7.75C9.42893 7.75 7.75 9.42893 7.75 11.5C7.75 13.5711 9.42893 15.25 11.5 15.25C13.5711 15.25 15.25 13.5711 15.25 11.5C15.25 9.42893 13.5711 7.75 11.5 7.75Z" fill="#4169E1"></path> <path d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z" stroke="#4169E1" stroke-width="2.4"></path> <path d="M14 14L16 16" stroke="#4169E1" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15 11.5C15 13.433 13.433 15 11.5 15C9.567 15 8 13.433 8 11.5C8 9.567 9.567 8 11.5 8C13.433 8 15 9.567 15 11.5Z" stroke="#4169E1" stroke-width="2.4"></path> </g></svg>
		</Link>
		<NormalText style='text1' size='11px' text='Other User' />
		</div>
		<div className='row bgBase borderAccent' style={{position: 'fixed', borderRadius: '11px', bottom:0, left: 0, height: '77px', width: '100%'}}>
			<div style={{margin: '7px'}}>
				
				<img className='borderAccent' src={My} id='botimg' style={{height: '48px', width: '48px', borderRadius: '50%', background: 'white', marginTop: '-37px'}}/>
				<NormalText style='text1' size='13px' text='TrevenAI' />
				<NormalText style='text1' size='11px' text='(recipient)' />
			</div>
			<form className='row' onSubmit={HandleMsg} method='post'>
			<input value={msg.mesg} onChange={(event) => setMsg({...msg, mesg: event.target.value})} placeHolder="Send a message.." className='borderAccent' type='text' style={{paddingLeft: '21px', borderRadius: '37px', marginTop: '7px', marginLeft: '3px', height: '37px', width: '73%'}}/>
			<svg onClick={HandleMsg} style={{marginTop: '5px', marginRight: '7px', marginLeft: '3px'}} fill="#4169E1" height="37px" width="37px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-108.9 -108.9 712.80 712.80" xml:space="preserve" stroke="#4169E1" stroke-width="0.00495003" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(0,0), scale(1)"><rect x="-108.9" y="-108.9" width="712.80" height="712.80" rx="356.4" fill="#7ed0ec" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#000000" stroke-width="38.610234000000005"> <g id="XMLID_51_"> <path id="XMLID_53_" d="M164.711,456.687c0,2.966,1.647,5.686,4.266,7.072c2.617,1.385,5.799,1.207,8.245-0.468l55.09-37.616 l-67.6-32.22V456.687z"></path> <path id="XMLID_52_" d="M492.431,32.443c-1.513-1.395-3.466-2.125-5.44-2.125c-1.19,0-2.377,0.264-3.5,0.816L7.905,264.422 c-4.861,2.389-7.937,7.353-7.904,12.783c0.033,5.423,3.161,10.353,8.057,12.689l125.342,59.724l250.62-205.99L164.455,364.414 l156.145,74.4c1.918,0.919,4.012,1.376,6.084,1.376c1.768,0,3.519-0.322,5.186-0.977c3.637-1.438,6.527-4.318,7.97-7.956 L494.436,41.257C495.66,38.188,494.862,34.679,492.431,32.443z"></path> </g> </g><g id="SVGRepo_iconCarrier"> <g id="XMLID_51_"> <path id="XMLID_53_" d="M164.711,456.687c0,2.966,1.647,5.686,4.266,7.072c2.617,1.385,5.799,1.207,8.245-0.468l55.09-37.616 l-67.6-32.22V456.687z"></path> <path id="XMLID_52_" d="M492.431,32.443c-1.513-1.395-3.466-2.125-5.44-2.125c-1.19,0-2.377,0.264-3.5,0.816L7.905,264.422 c-4.861,2.389-7.937,7.353-7.904,12.783c0.033,5.423,3.161,10.353,8.057,12.689l125.342,59.724l250.62-205.99L164.455,364.414 l156.145,74.4c1.918,0.919,4.012,1.376,6.084,1.376c1.768,0,3.519-0.322,5.186-0.977c3.637-1.438,6.527-4.318,7.97-7.956 L494.436,41.257C495.66,38.188,494.862,34.679,492.431,32.443z"></path> </g> </g></svg>
			
			</form>
		</div>
		
		
	</div>
	</>
	)
	
};

export default User