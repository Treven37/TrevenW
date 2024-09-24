import React from 'react'
//components
import Space from '../components/Space'
import FriendList from '../components/FriendList'
//style
import '../styles/styleglobal.scss'

const OtherChat = () => {
	return (
		<>
		<div className='main'>
			<Space Flex='11%' />
			<FriendList profilepic="" name="Name" lastmessage="Name: Last Message" time="Time"/>
			<FriendList profilepic="" name="Name" lastmessage="Name: Last Message" time="Time"/>
			<FriendList profilepic="" name="Name" lastmessage="Name: Last Message" time="Time"/>
			<FriendList profilepic="" name="Name" lastmessage="Name: Last Message" time="Time"/>
			<FriendList profilepic="" name="Name" lastmessage="Name: Last Message" time="Time"/>
			<FriendList profilepic="" name="Name" lastmessage="Name: Last Message" time="Time"/>
		</div>
		</>
	);
};

export default  OtherChat