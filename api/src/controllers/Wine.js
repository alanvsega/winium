const Wine = require('../models/Wine');

// @TODO: Habilitar pesquisa para os principais campos
const getWines = async (req, res) => {
  try {
    const { limit = 12, page = 1, sort = '-createdAt' } = req.query;

    if (page < 1) return res.status(400).send('Invalid page.');

    const wines = await Wine.find()
      .limit(Number(limit))
      .skip(Number(limit * page - limit))
      .sort(sort);

    return res.json({ wines });
  } catch (error) {
    return res.status(500).send('Erro interno no servidor.');
  }
};

module.exports = {
  getWines,
};
