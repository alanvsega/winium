const { hash } = require('bcryptjs');

const User = require('../models/User');

const SALT_ROUNDS = 7;

const createUser = async (req, res) => {
  try {
    const hasEmail = await User.findOne({ email: req.body.email });
    if (hasEmail) return res.status(409).send('E-mail já cadastrado.');

    req.body.password = await hash(req.body.password, SALT_ROUNDS);

    const user = await User.create(req.body);
    return res.json(user);
  } catch (error) {
    return res.send('Erro interno no servidor.');
  }
};

module.exports = {
  createUser,
};
