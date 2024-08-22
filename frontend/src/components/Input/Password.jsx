import React, {useState} from 'react'
import PropTypes from 'prop-types'

//hooks

//styles
import styles from './Password.module.scss'

const Password = ({}) => {
	const [password, setPassword] = useState("");
	return (
    <>
    	<label className={styles.label}>Password:</label>
        <input className={styles.input} type="password" placeHolder='Password' value={password} onChange={(event) => setPassword(event.target.value)} />
        
    </>
	);
};

// Define prop types
Password.propTypes = {
  
};

// Define default props
Password.defaultProps = {
  
};

export default Password

