const router = require('express').Router();

const {
  createReview,
  deleteReview,
  getReviews,
  updateReview,
} = require('../controllers/Review');

router.get('/reviews', getReviews);
router.post('/review', createReview);
router.patch('/review/:id', updateReview);
router.delete('/review/:id', deleteReview);

module.exports = router;
