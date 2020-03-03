const User = require('../models/user');
const Pet = require('../models/pet');

module.exports = {
	index,
	show
};

function index(req, res) {
	let modelQuery = req.query.name
		? { name: new RegExp(req.query.name, 'i') }
		: {};
	let sortKey = req.query.sort || 'name';
	User.find(modelQuery)
		.sort(sortKey)
		.exec((err, users) => {
			Pet.find({}, (err, pets) => {
				if (err) return next(err);
				res.render('users/index', {
					title: 'Pet Rater',
					users,
					user: req.user,
					name: req.query.name,
					sortKey,
					pets
				});
			});
		});
}

function show(req, res) {
	Pet.findById(req.params.id, (err, pet) => {
		User.find({ pet: pet._id }, function(err, user) {
			res.render('users/show', {
				title: 'Pet Profile',
				pet,
				user: req.user
			});
		});
	});
}
