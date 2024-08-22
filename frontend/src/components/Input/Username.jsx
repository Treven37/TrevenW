import React, {useState} from 'react'
import PropTypes from 'prop-types'

//hooks

//styles
import styles from './Username.module.scss'

const Username = ({}) => {
	const [username, setUsername] = useState("");
	return (
    <>
    	<label className={styles.label}>Username:</label>
        <input className={styles.input} type="text" placeHolder='Email or Contact Num..' value={username} onChange={(event) => setUsername(event.target.value)} />
        
    </>
	);
};

// Define prop types
Username.propTypes = {
  
};

// Define default props
Username.defaultProps = {
  
};

export default Username

