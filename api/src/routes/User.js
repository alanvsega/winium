const router = require('express').Router();

const { createUser, login } = require('../controllers/User');

router.post('/user', createUser);
router.post('/login', login);

module.exports = router;
