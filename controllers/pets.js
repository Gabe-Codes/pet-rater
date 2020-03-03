const Pet = require('../models/pet');

module.exports = {
	new: newPet,
	create,
	show
};

function newPet(req, res) {
	res.render('users/new', {
		title: 'New Pet',
		user: req.params.id
	});
}

function create(req, res) {
	const pet = { ...req.body, user: req.params.id };
	Pet.create(pet, err => {
		if (err) return res.redirect('main/new');
		res.redirect('/main');
	});
}

function show(req, res) {
	Pet.findById(req.params.id, (err, pet) => {
		// User.find({ pet: pet._id }, function(err, user) {
			res.render('users/show', {
				title: 'Pet Profile',
				pet,
				user: req.user
			});
		// });
	});
}
