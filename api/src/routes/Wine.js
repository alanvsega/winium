const router = require('express').Router();

const {
  createWine,
  getVarieties,
  getWine,
  getWines,
  getTopWines,
  updateWine,
} = require('../controllers/Wine');

router.get('/wines', getWines);
router.get('/wines/top', getTopWines);
router.get('/wine/:id', getWine);
router.post('/wine', createWine);
router.patch('/wine/:id', updateWine);

router.get('/varieties', getVarieties);

module.exports = router;
