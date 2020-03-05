const router = require('express').Router();
const Pet = require('../models/pet');

const commentsCtrl = require('../controllers/comments');

router.post('/main/:id/comments', isLoggedIn, commentsCtrl.create);
router.delete('/comments/:id', commentsCtrl.delete);
router.put('/comments/:id', commentsCtrl.update);

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) return next();
	res.redirect('/auth/google');
}

module.exports = router;
