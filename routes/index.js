const router = require('express').Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Pet Rater Home' });
});

module.exports = router;
