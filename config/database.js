const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
});

db.on('connected', () => {
	console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});

db.on('error', err => {
	console.log('MongoDB Error: ', err);
});
