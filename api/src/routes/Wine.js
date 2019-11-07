const router = require('express').Router();

const { getWine, getWines } = require('../controllers/Wine');

router.get('/wines', getWines);
router.get('/wine/:id', getWine);
router.post('/wine');
router.patch('/wine/:id');

module.exports = router;
