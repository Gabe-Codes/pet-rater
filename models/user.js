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

const commentSchema = new Schema (
	{
		name: String,
		rating: {
			type: Number,
			required: true,
			min: 1,
			max: 5
		},
		comment: {
			type: String,
		}
	},
	{
		timestamps: true
	}
);

const postSchema = new Schema(
	{
		pets: [petSchema],
		comments: [commentSchema],
		// id: Schema.Types.ObjectId
	},
	{
		timestamps: true
	}
);

const userSchema = new Schema(
	{
		name: String,
		email: String,
		googleId: String,
		pets: [petSchema],
		posts: [postSchema]
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('User', userSchema);
