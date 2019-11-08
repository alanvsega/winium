const router = require('express').Router();

const {
  createWine,
  getWine,
  getWines,
  updateWine,
} = require('../controllers/Wine');

router.get('/wines', getWines);
router.get('/wine/:id', getWine);
router.post('/wine', createWine);
router.patch('/wine/:id', updateWine);

module.exports = router;
