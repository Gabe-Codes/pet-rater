const router = require('express').Router();
const petsCtrl = require('../controllers/pets')

router.get('/new', isLoggedIn, petsCtrl.new);
router.get('/:id', petsCtrl.show);
router.post('/', petsCtrl.create);
router.delete('/:id', petsCtrl.delete);
router.post('/main/:id/comments', petsCtrl.comment);

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) return next();
	res.redirect('/auth/google');
}

module.exports = router;