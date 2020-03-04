const router = require('express').Router();
const Pet = require('../models/pet');
let commentIds = [];

const commentsCtrl = require('../controllers/comments');

router.post(
	'/main/:id/comments',
	isLoggedIn,
	hasCommented,
	commentsCtrl.create
);
router.delete('/comments/:id', commentsCtrl.delete);
router.put('/comments/:id', commentsCtrl.update);

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) return next();
	res.redirect('/auth/google');
}

function hasCommented(req, res, next) {
	Pet.findById(req.params.id, (err, pet) => {
		if (pet.comments.length > 0) {
			pet.comments.forEach(c => {
                commentIds.push(c.googleId);
            });
			if (commentIds.includes(req.user.googleId)) res.redirect(`/main/${req.params.id}`);
			else {
				return next();
			}
        }
        else {
            return next();
        }
	});
}

module.exports = router;
