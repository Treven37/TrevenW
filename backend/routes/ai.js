const express = require('express');
const {readFileSync} = require('fs');
const path = require('path');

const router = express.Router();
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold} = require("@google/generative-ai");
require('dotenv').config();
const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});
const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 7373,
  responseMimeType: "text/plain",
};
const chatSession = model.startChat({
    generationConfig,
 // safetySettings: Adjust safety settings
 // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
    ],
});

router.get('/a', async (req, res) => {
	res.status(200).json({'hi': 'hi'});
});
router.post('/a', async (req, res) => {
	if(!req.body.mesg) {
	var msg = 'Create a vocabulary list and explanation to each concept: ';
	var data = readFileSync(path.join(__dirname, './Yr2S1.txt'), 'utf8');
	var data2 = '';
	data = data.split('\n');
	const lineCount = data.length - 111;
	const randomLine = Math.floor(Math.random() * lineCount);
	for(let i = 0; i < 111; i++) {
		msg += data[randomLine+i]
		data2 += data[randomLine+i]
	}
	console.log(data2);
	try {
	let result = await chatSession.sendMessage(msg);
	let aiMsg = '<p>'+result.response.text();
	aiMsg = aiMsg.replaceAll('**', '<br/>')
	aiMsg = aiMsg.replaceAll('`', '')
	aiMsg = aiMsg.replaceAll('* ', '<br/>')
	const aiMsgFinal = aiMsg.replaceAll(' *', '<br/>')+'</p>';
	
    res.status(200).json({'msg': aiMsgFinal});
    } catch (err) {
    	res.status(200).json({'msg': 'AI Error'});
    }
    } else {
    	
    var msg = req.body.mesg;
    let result = await chatSession.sendMessage(msg);
	let aiMsg = result.response.text();
	res.status(200).json({'msg': aiMsg});
	
    }
});

module.exports = router