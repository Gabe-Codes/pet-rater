const router = require('express').Router();
const passport = require('passport');
const User = require('../models/user');

router.get('/', (req, res, next) => {
	let modelQuery = req.query.name
		? { name: new RegExp(req.query.name, 'i') }
		: {};
	let sortKey = req.query.sort || 'name';
	User.find(modelQuery)
		.sort(sortKey)
		.exec(function(err, users) {
			if (err) return next(err);
			res.render('index', {
				title: 'Pet Rater Home',
				users,
				user: req.user,
				name: req.query.name,
				sortKey
			});
		});
});

router.get(
	'/auth/google',
	passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
	'/oauth2callback',
	passport.authenticate('google', {
		successRedirect: '/main',
		failureRedirect: '/'
	})
);

router.get('/logout', function(req, res) {
	req.logout();
	res.redirect('/');
});

module.exports = router;
