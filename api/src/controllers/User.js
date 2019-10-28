const { compare, hash } = require('bcryptjs');

const User = require('../models/User');

const SALT_ROUNDS = 7;

const createUser = async (req, res) => {
  try {
    const hasEmail = await User.findOne({ email: req.body.email });
    if (hasEmail) return res.status(409).send('E-mail já cadastrado.');

    req.body.password = await hash(req.body.password, SALT_ROUNDS);

    const user = await User.create(req.body);

    return res.json({ ...user.toObject(), password: undefined });
  } catch (error) {
    return res.send('Erro interno no servidor.');
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).send('E-mail ou senha incorretos');

    const equals = await compare(password, user.password);
    if (!equals) return res.status(401).send('E-mail ou senha incorretos.');

    return res.json({ ...user.toObject(), password: undefined });
  } catch (error) {
    return res.send('Erro interno no servidor.');
  }
};

module.exports = {
  createUser,
  login,
};
