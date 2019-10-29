const router = require('express').Router();

const {
  createUser,
  getUser,
  login,
  updateUser,
} = require('../controllers/User');

router.get('/user', getUser);
router.post('/user', createUser);
router.post('/login', login);
router.patch('/user', updateUser);

module.exports = router;
