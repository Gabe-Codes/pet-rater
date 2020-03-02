const User = require('../models/user');

module.exports = {
	index,
	new: newPet,
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
			if (err) return next(err);
			res.render('users/index', {
				title: 'Pet Rater',
				users,
				user: req.user,
				name: req.query.name,
				sortKey
			});
		});
}

function newPet(req, res) {
	res.render('users/new', {
		title: 'New Pet',
		user: req.user
	});
}

function show(req, res) {
	User.findById(req.params.id, (err, user) => {
		res.render('users/show', {
			title: 'Pet Profile',
			user:req.user
		});
	});
}
