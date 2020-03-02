const User = require('../models/user');

module.exports = {
	create
};

function create(req, res) {
        const user = req.user;
		user.pets.push(req.body);
		user.save(err => {
			if (err) return res.redirect('main/new');
			res.redirect('/main');
		});
}

