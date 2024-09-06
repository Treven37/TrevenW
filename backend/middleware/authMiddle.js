require('dotenv').config();
const jwt = require('jsonwebtoken');
verifyToken = (req, res, next) => {
	const token = req.header('Authorization');
	if (!token) {
		req.userId = false;
		next();
	} else {
	try {
		const decoded = jwt.verify(token, process.env.SECRETKEY);
		req.userId = decoded.userId;
		next();
	} catch (err) {
		req.userId = false;
		next();
	}
	}
}

module.exports = verifyToken;