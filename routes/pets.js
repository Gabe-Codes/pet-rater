const router = require('express').Router();

const petsCtrl = require('../controllers/pets')

router.post('/', isLoggedIn, petsCtrl.create);

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) return next();
	res.redirect('/auth/google');
}

module.exports = router;