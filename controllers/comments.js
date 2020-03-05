const Pet = require('../models/pet');

module.exports = {
	create,
	delete: deleteComment,
	update
};

function create(req, res) {
	Pet.findById(req.params.id, (err, pet) => {
		req.body.postedBy = req.user._id;
		req.body.name = req.user.name;
		req.body.googleId = req.user.googleId;
		pet.comments.push(req.body);
		pet.save(err => {
			if (err) return res.redirect(`/main/${req.params.id}`);
			res.redirect(`/main/${req.params.id}`);
		});
	});
}

function deleteComment(req, res) {
	Pet.findOne({ 'comments._id': req.params.id }, (err, pet) => {
		const comment = pet.comments.id(req.params.id);
		comment.remove();
		pet.save(err => {
			res.redirect(`/main/${pet._id}`);
		});
	});
}

function update(req, res) {
	Pet.findOne({ 'comments._id': req.params.id }, (err, pet) => {
        const comment = pet.comments.id(req.params.id);
        console.log(req.body.comment, 'comment: ', comment.comment);
        comment.comment = req.body.comment;
		comment.rating = req.body.rating;
        console.log(comment)
		pet.save(err => {
            console.log(err)
			res.redirect(`/main/${pet._id}`);
		});
	});
}
