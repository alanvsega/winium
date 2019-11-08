const router = require('express').Router();

const {
  createWine,
  getWine,
  getWines,
} = require('../controllers/Wine');

router.get('/wines', getWines);
router.get('/wine/:id', getWine);
router.post('/wine', createWine);
router.patch('/wine/:id');

module.exports = router;
