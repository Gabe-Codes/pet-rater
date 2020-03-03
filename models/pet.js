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
    },
    postedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [commentSchema]
});

module.exports = mongoose.model('Pet', petSchema);