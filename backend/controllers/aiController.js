require('dotenv').config();
const {readFileSync} = require('fs');
const path = require('path');
const Groq = require('groq-sdk');
const groqApiKey = process.env.GROQ_API_KEY;
const groq = new Groq({apiKey: groqApiKey});
const cSharp = 1;
const dSA = 3995;
const dMath = 5712;
const entrep = 7519;
const pOC = 9702;
const rPH = 11756;
const rizal = 15910;
const last = 17264;
var sub = [cSharp, dSA, dMath, entrep, pOC, rPH, rizal];

const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold} = require("@google/generative-ai");
const geminiApiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(geminiApiKey);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});
const generationConfig = {
  temperature: 0.2,
  topP: 1.0,
  topK: 373,
  maxOutputTokens: 8484,
  responseMimeType: "text/plain",
};
const chatSession = model.startChat({
    generationConfig,
 // safetySettings: Adjust safety settings
 // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
    ],
});

const a = async (req, res) => {
	try {
		if(!req.body.mesg) {
			var msg = 'Create a vocabul explanation to each text below: ';
			//put your path to the file you want to learn in here
			var data = readFileSync(path.join(__dirname, '../routes/Yr2S1.txt'), 'utf8');
			var data2 = '';
			data = data.split('\n');
			const lineCount = data.length - 373;
			const randomLine = Math.floor(Math.random() * lineCount);
			for(let i = 0; i < 373; i++) {
				msg += data[randomLine+i]
				data2 += data[randomLine+i]
			}
			console.log(data2);
			let result = await chatSession.sendMessage(msg);
			let aiMsg = '<p>'+result.response.text();
			aiMsg = aiMsg.replaceAll('**', '<br/>')
			aiMsg = aiMsg.replaceAll('`', '')
			aiMsg = aiMsg.replaceAll('* ', '<br/>')
			const aiMsgFinal = aiMsg.replaceAll(' *', '<br/>')+'</p>';
    		res.status(200).json({'msg': aiMsgFinal});
    	} else {
    		var msg = req.body.mesg;
    		let result = await chatSession.sendMessage(msg);
			let aiMsg = result.response.text();
			res.status(200).json({'msg': aiMsg});
    	}
    } catch (err) {
    	res.status(200).json({'msg': 'TrevenAI: Error'});
    }
};
async function main(i) {
	return await groq.chat.completions.create({
    	"messages": [
    		{
        		"role": "user",
        		"content": i
    		}
    	],
    	"model": "llama3-8b-8192"
	});
}

//(Sept 20, 2024)
//Modified


const b = async (req, res) => {
	try {
		if(!req.body.mesg) {
			var msg = 'Create a 10 question multple choices a), b), c), or d) based on the information below: ';
			//put your path to the file you want to learn in here
			var data = readFileSync(path.join(__dirname, '../routes/Yr2S1.txt'), 'utf8');
			var data2 = '';
			data = data.split('\n');
			const lineCount = data.length - 373;
			const randomLine = Math.floor(Math.random() * lineCount);
			for(let i = 0; i < 373; i++) {
				msg += data[randomLine+i]
				data2 += data[randomLine+i]
			}
			const chatCompletion = await main(msg);
			data2 = 'Explain each of the concept used below: \n'+data2;
			const chatCompletion2 = await main(data2);
			let aiMsg = await chatCompletion.choices[0]?.message?.content;
			let aiMsg2 = await chatCompletion2.choices[0]?.message?.content;
			aiMsg = aiMsg.replaceAll('**', '<br/>');
			aiMsg = aiMsg.replaceAll('`', '');
			aiMsg = aiMsg.replaceAll('* ', '<br/>');
			aiMsg2 = aiMsg2.replaceAll('**', '<br/>');
			aiMsg2 = aiMsg2.replaceAll('`', '');
			aiMsg2 = aiMsg2.replaceAll('* ', '<br/>');
			
			aiMsg = aiMsg.replaceAll('a)', '<br/>a)');
			aiMsg = aiMsg.replaceAll('b)', '<br/>b)');
			aiMsg = aiMsg.replaceAll('c)', '<br/>c)');
			aiMsg = aiMsg.replaceAll('d)', '<br/>d)');
			
			aiMsg = aiMsg.replaceAll('1.', '<br/><br/>1.');
			aiMsg = aiMsg.replaceAll('2.', '<br/><br/>2.');
			aiMsg = aiMsg.replaceAll('3.', '<br/><br/>3.');
			aiMsg = aiMsg.replaceAll('4.', '<br/><br/>4.');
			aiMsg = aiMsg.replaceAll('5.', '<br/><br/>5.');
			aiMsg = aiMsg.replaceAll('6.', '<br/><br/>6.');
			aiMsg = aiMsg.replaceAll('7.', '<br/><br/>7.');
			aiMsg = aiMsg.replaceAll('8.', '<br/><br/>8.');
			aiMsg = aiMsg.replaceAll('9.', '<br/><br/>9.');
			aiMsg = aiMsg.replaceAll('10.', '<br/><br/>10.');
			aiMsg = aiMsg.replaceAll('Answer:', '<br/><br/>Answer:<br/>');
			res.status(200).json({'msg': aiMsg+'<br/><br/><br/><br/><br/><h2>Learnings</h2>'+aiMsg2});
		} else {
			const msg = req.body.mesg;
			const chatCompletion = await main(msg);
			const aiMsg = await chatCompletion.choices[0]?.message?.content;
			res.status(200).json({'msg': '<h3>AI1</h3>'+aiMsg});
		}
	} catch (err) {
		res.status(200).json({'msg': 'TrevenAI: Error'});
	}
}
const tf = require('@tensorflow/tfjs');

const c = async (req, res) => {
	const model = tf.sequential();
	model.add(tf.layers.dense({units: 1, inputShape: [1]}));
	model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
	const xs = tf.tensor2d([1, 2, 3, 4, 5], [5, 1]);
	const ys = tf.tensor2d([1, 4, 6, 8, 10], [5, 1]);
	await model.fit(xs, ys, {epochs: 77});
	
	res.status(200).json({'msg': model.predict(tf.tensor2d([7, 9, 11, 20], [4, 1])).dataSync()});
}

module.exports = {a, b, c}