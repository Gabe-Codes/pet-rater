const router = require('express').Router();
const usersCtrl = require('../controllers/users');

router.get('/', usersCtrl.index);
router.get('/:id', usersCtrl.show);
// router.post('/main/:id/comments', usersCtrl.comment);

module.exports = router;
