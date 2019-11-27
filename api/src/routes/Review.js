const router = require('express').Router();

const {
  createReview,
  deleteReview,
  getReviews,
  getReviewsByMonth,
  getReviewsByWine,
  updateReview,
} = require('../controllers/Review');

router.get('/reviews', getReviews);
router.get('/reviews/month', getReviewsByMonth);
router.get('/reviews/wine/:id', getReviewsByWine);
router.post('/review', createReview);
router.patch('/review/:id', updateReview);
router.delete('/review/:id', deleteReview);

module.exports = router;
