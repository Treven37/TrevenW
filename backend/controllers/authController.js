const User = require('../models/User');
const twilioConfig = require('../config/twilioConfig');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const twilio = require('twilio')(twilioConfig.accountSID, twilioConfig.authToken);
require('dotenv').config();

const signup = async (req, res) => {
	const {name, user, pass, profilepic, isNum} = req.body;
	try {
		//checks whether name or username already exists
		const nameExist = await User.findOne({name});
		const userExist = await User.findOne({user});
		if ( nameExist) {
			return res.status(200).json({'b': true});
		} else if (userExist) {
			return res.status(200).json({});
		}
		var msg;
		const code=Math.round(Math.random()*900+1000);
		if(isNum) {
			msg = `Contact: ${code}`;
		} else {
			msg = `Email: ${code}`;
		}
		
		//sucess signup
		res.status(200).json({'a':true, 'name':name, 'user':user, 'pass': pass, 'profilepic': profilepic, 'code':code, 'msg':msg});
	} catch (err) { 
		res.status(500).json({
			
		});
	}
};

//Fix login part
const login = async (req, res) => {
	const {name, pass} = req.body;
	try {
		//checks whether name or username already exists
		const name2Exist = await User.findOne({'name': name.toString()});
		const user2Exist = await User.findOne({'user': name.toString()});
		if (name2Exist) {
			const isMatch = await bcrypt.compare(pass, name2Exist.pass);
			if (!isMatch) {
				return res.status(200).json({});	
			}
			//creates jwt
			const token2 = jwt.sign({userId: name2Exist.user}, process.env.SECRETKEY, {expiresIn: '1h'});
			//sucess login
			name2Exist.isLogin = true;
			res.status(200).json({'a': true, 'token': token2});
		} else if (user2Exist) {
			const isMatch = await bcrypt.compare(pass, user2Exist.pass);
			if (!isMatch) {
				return res.status(200).json({});	
			}
			
			//creates jwt
			const token2 = jwt.sign({userId: user2Exist.user}, process.env.SECRETKEY, {expiresIn: '1h'});
			//sucess login
			user2Exist.isLogin = true;
			res.status(200).json({'a': true, 'token': token2});
		} else {
			return res.status(200).json({});
		}
		
		
	} catch (err) { 
		res.status(500).json({
			
		});
		console.log(err);
	}
}

const verify = async (req, res) => {
	const name = req.body.name;
	const user = req.body.user;
	const pass = req.body.pass;
	const profilepic = req.body.profilepic;
	const code = req.body.code;
	const msg = req.body.msg;
	const inputCode = req.body.incode;
	/*fs.readFile(profilepicFile, (err, data) => {
		if(err) {
			console.error(err);
			return;
		}
		const profilepic = data.toString('base64');
	})*/
	if (Number(code) !== Number(inputCode)) {
		//unsucess verified
		res.status(200).json({'a': false, 'msg': msg});
	} else {
	const newUser = new User({name, user, pass, profilepic});
	await newUser.save();
	//create jwttoken
	const token = jwt.sign({userId: newUser.user}, process.env.SECRETKEY, {expiresIn: '1h'});
	//sucess verified
	res.status(200).json({'a': true, 'token': token});
	}
}

const deleteAllUser = (req, res) => {
	User.deleteMany({})
		.then(() => {
			console.log('deleted all userSchema');
			res.status(200).json({'a': 1});
		})
		.catch( err => {
			console.log(err);
		});
}

module.exports = {signup, login, verify, deleteAllUser}