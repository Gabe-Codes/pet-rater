const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema(
	{
		name: String,
		rating: {
			type: Number,
			required: true,
			min: 1,
			max: 5
		},
		comment: {
			type: String
		}
	},
	{
		timestamps: true
	}
);

const postSchema = new Schema(
	{
		pets: {
			type: Schema.Types.ObjectId,
			ref: 'Pet'
		},
		comments: [commentSchema]
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
		pets: {
			type: Schema.Types.ObjectId,
			ref: 'Pet'
		},
		posts: [postSchema]
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('User', userSchema);
