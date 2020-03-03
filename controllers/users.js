const User = require('../models/user');
const Pet = require('../models/pet');

module.exports = {
	index,
	// show
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


