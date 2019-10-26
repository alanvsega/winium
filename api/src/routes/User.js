const router = require('express').Router();

const { createUser } = require('../controllers/User');

router.post('/user', createUser);

module.exports = router;
