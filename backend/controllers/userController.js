const User = require('../models/User');
const twilioConfig = require('../config/twilioConfig');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const fs = require('fs');
require('dotenv').config();

const getPublicData = async (req, res) => {
	const user = req.body.data;
	const userData = await User.findOne({user});
	res.status(201).json({'a': 'Hi'});
}

const getPrivateData = async (req, res) => {
	const user = req.userId;
	const userData = await User.findOne({user});
	res.status(201).json(userData);
}

const updateData = async (req, res) => {
	const user = req.userId;
	const userData = await User.findOne({user});
	userData.pass = null;
	res.status(201);
}


module.exports = {getPublicData, getPrivateData, updateData}