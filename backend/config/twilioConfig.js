require('dotenv').config();

module.exports = {
	accountSID: process.env.TWILIO_ACC_SID,
	authToken: process.env.TWILIO_ACC_AUTH
}