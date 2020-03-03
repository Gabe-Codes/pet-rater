const Pet = require('../models/pet');

module.exports = {
	create
};

function create(req, res) {
	Pet.findById(req.params.id, (err, pet) => {
        req.body.postedBy = req.user._id;
        req.body.name = req.user.name;
		pet.comments.push(req.body);
		pet.save(err => {
			if (err) return res.redirect(`/main/${req.params.id}`);
			res.redirect(`/main/${req.params.id}`);
		});
	});
}
