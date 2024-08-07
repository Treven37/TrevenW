require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get('/', (req, res) => {
	res.json();
});

const { MongoClient, ServerApiVersion } = require('mongodb');

const mongoDBUri = process.env.MONGO_URI;

mongoose.connect(mongoDBUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));
const db = mongoose.connection;
db.on('connected', () => console.log('Mongoose connected'));
db.on('error', err => console.error('Mongoose connection error:', err));
db.on('disconnected', () => console.log('Mongoose disconnected'));

app.listen(PORT, () => {
	console.log(`App listening at port ${PORT}`)
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose connection disconnected through app termination');
    process.exit(0);
  });
});