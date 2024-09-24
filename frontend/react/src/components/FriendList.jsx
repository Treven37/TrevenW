import { useState } from 'react'
import {Link} from 'react-router-dom'

const FriendList = ({profilepic, name, lastmessage, time}) => {
	return (
		<>
			<div style={{flexFlow: 'row', width: '100%', height: '73px', background: 'red', alignItems: 'center', justifyContent: 'left'}}>
				<div style={{background: 'blue', width: '21%', height: '95%', marginLeft: '3px'}}>
					<img />
				</div>
				<div style={{background: 'blue', width: '62%', height: '95%', marginLeft: '3px'}}>
					<div style={{justifyContent: 'left', width: '100%', background: 'red'}}>
						{name}
					</div>
					<div style={{flexFlow: 'row'}}>
						<div>
							{lastmessage}
						</div>
						<div>
							{time}
						</div>
					</div>
					
				</div>
			</div>
		</>
	);
	
}

export default FriendList