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
        },
        postedBy:{
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        googleId: String
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
        required: true,
        unique: true
    },
    owner: {
        type: String
    },
    postedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [commentSchema],
});

petSchema.path('image').validate((val) => {
    urlRegex = /https:\/\/i.imgur.com\/(?:.*)/;
    return urlRegex.test(val);
}, 'Invalid URL.');

module.exports = mongoose.model('Pet', petSchema);