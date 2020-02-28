const User = require('../models/user');

module.exports = {
	index
};

function index(req, res) {
	User.find({}, (err, users) => {
		res.render('users/index', { title: 'Pet Rater', users });
	});
}
