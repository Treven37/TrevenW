const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const signup = async (req, res) => {
	const {name, user, pass, profilepic} = req.body;
	console.log(name);
	try {
		//checks whether name or username already exists
		const nameExist = await User.findOne({name});
		const userExist = await User.findOne({user});
		if ( nameExist || userExist) {
			return res.status(400).json({});
		}
		console.log('sucess');
		const newUser = new User({name, user, pass, profilepic});
		console.log(newUser.pass);
		await newUser.save();
		//create jwttoken
		const token = jwt.sign({userId: newUser._id}, process.env.SECRETKEY, {expiresIn: '1h'});
		//sucess signup
		res.status(200).json({'a': true, token});
	} catch (err) { 
		res.status(500).json({
			
		});
	}
};

//Fix login part
const login = async (req, res) => {
	const {name, pass} = req.body;
	console.log(name);
	try {
		
		//checks whether name or username already exists
		const name2Exist = await User.findOne({'name': name.toString()});
		const user2Exist = await User.findOne({'user': name.toString()});
		console.log(pass);
		if (name2Exist) {
			const isMatch = await bcrypt.compare(pass, name2Exist.pass);
			if (!isMatch) {
				console.log('incorrect');
				return res.status(400).json({});	
			}
			//creates jwt
			const token2 = jwt.sign({userId: name2Exist._id}, process.env.SECRETKEY, {expiresIn: '1h'});
			//sucess login
			console.log('correct');
			name2Exist.isLogin = true;
			res.status(200).json({'a': true, token2});
		} else if (user2Exist) {
			const isMatch = await bcrypt.compare(pass, user2Exist.pass);
			if (!isMatch) {
				console.log('incorrect');
				return res.status(400).json({});	
			}
			//creates jwt
			const token2 = jwt.sign({userId: user2Exist._id}, process.env.SECRETKEY, {expiresIn: '1h'});
			//sucess login
			console.log('correct');
			user2Exist.isLogin = true;
			res.status(200).json({'a': true, token2});
		} else {
			console.log('not exist');
			console.log(name2Exist);
			return res.status(400).json({});
		}
		
		
	} catch (err) { 
		res.status(500).json({
			
		});
		console.log(err);
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

module.exports = {signup, login, deleteAllUser}