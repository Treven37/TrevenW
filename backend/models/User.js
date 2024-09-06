const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	verified: {
		type: Boolean
	},
	user: {
		type: String,
		required: true,
		unique: true
	},
	pass: {
		type: String,
		required: true
	},
	profilepic: {
		type: String,
		required: true
	},
	bgpic: {
		type: String
	},
	bio: {
		type: String,
		default: ' '
	},
	excellence: {
		type: Number,
		default: 0
	},
	followers: {
		type: Number,
		default: 0
	},
	elo: {
		type: Number,
		default: 300
	},
	gender: {
		type: Number
	}
});

userSchema.pre('save', async function(next) {
	const salt = await bcrypt.genSalt(10);
	this.pass = await bcrypt.hash(this.pass, salt);
	next();
});

module.exports = mongoose.model('User', userSchema);