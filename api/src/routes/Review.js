const router = require('express').Router();

const { getReviews } = require('../controllers/Review');

router.get('/reviews', getReviews);

module.exports = router;
