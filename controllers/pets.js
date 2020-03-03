const Pet = require('../models/pet');

module.exports = {
	create,
	new: newPet
};

function create(req, res) {
	const pet = { ...req.body, user: req.params.id };
	Pet.create(pet, err => {
		if (err) return res.redirect('main/new');
		res.redirect('/main');
	});
}

function newPet(req, res) {
	res.render('users/new', {
		title: 'New Pet',
		user: req.params.id
	});
}
