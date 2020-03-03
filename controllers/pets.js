const Pet = require('../models/pet');

module.exports = {
	new: newPet,
	create,
	show,
	comment
};

function newPet(req, res) {
	res.render('users/new', {
		title: 'New Pet',
		user: req.user
	});
}

function create(req, res) {
	const pet = { ...req.body, postedBy: req.user, owner: req.user.name };
	Pet.create(pet, err => {
		if (err) return res.redirect('main/new');
		res.redirect('/main');
	});
}

function show(req, res) {
	Pet.findById(req.params.id, (err, pet) => {
		res.render('users/show', {
			title: 'Pet Profile',
			pet,
			user: req.user
		});
	});
}

function comment(req, res) {}
