require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(session({
	secret: process.env.SECRETKEY,
	resave: false,
	saveUninitialized: true
}));

app.use(cors({
	origin: 'http://localhost:3200'
}));

app.use(express.json()); // For JSON data
app.use(express.urlencoded({ extended: true })); // For URL-encoded data

// ... other routes


app.use('/api', require('./routes/auth'))

app.get('/', (req, res) => {
	res.json();
});

const { MongoClient, ServerApiVersion } = require('mongodb');

const mongoDBUri = process.env.MONGO_URI;

mongoose.connect(mongoDBUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {})
.catch(err => console.error('Failed to connect to MongoDB', err));

const db = mongoose.connection;
db.on('connected', () => {});
db.on('error', err => console.error('Mongoose connection error:', err));
db.on('disconnected', () => {});

app.listen(PORT, () => {
	console.log(`App listening at port ${PORT}`)
});

process.on('SIGINT', () => {
async function closeConnection() {
    try {
        await mongoose.connection.close();
        console.log('Connection closed successfully.');
        process.exit(0);
    } catch (err) {
        console.error('Failed to close the connection:', err);
    }
}

// Call the function when you need to close the connection
closeConnection();

});