const router = require('express').Router();

const { getWines } = require('../controllers/Wine');

router.get('/wines', getWines);
router.get('/wine/:id');
router.post('/wine');
router.patch('/wine/:id');

module.exports = router;
