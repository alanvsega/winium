const { compare, hash } = require('bcryptjs');
const { sign } = require('jsonwebtoken');

const User = require('../models/User');

const SALT_ROUNDS = 7;

const createToken = id => sign({ id }, process.env.JWT_KEY);

const createUser = async (req, res) => {
  try {
    const hasEmail = await User.findOne({ email: req.body.email });
    if (hasEmail) return res.status(409).send('E-mail já cadastrado.');

    req.body.password = await hash(req.body.password, SALT_ROUNDS);

    const user = await User.create(req.body);
    const token = createToken(user._id);

    return res.json({
      user: { ...user.toObject(), password: undefined },
      token,
    });
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

    const token = createToken(user._id);

    return res.json({
      user: { ...user.toObject(), password: undefined },
      token,
    });
  } catch (error) {
    return res.send('Erro interno no servidor.');
  }
};

module.exports = {
  createUser,
  login,
};
