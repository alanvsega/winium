const User = require('../models/User');

const createUser = async (req, res) => {
  try {
    const hasEmail = await User.findOne({ email: req.body.email });
    if (hasEmail) return res.status(409).send('E-mail já cadastrado.');

    const user = await User.create(req.body);
    return res.json(user);
  } catch (error) {
    return res.send('Erro interno no servidor.');
  }
};

module.exports = {
  createUser,
};
