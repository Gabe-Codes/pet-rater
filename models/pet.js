const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = new Schema({
	pet: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
    }
});

module.exports = mongoose.model('Pet', petSchema);