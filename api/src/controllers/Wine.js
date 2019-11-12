const { Types: { ObjectId } } = require('mongoose');

const Wine = require('../models/Wine');

const filtersWhitelist = [
  'country',
  'variety',
];

const searchFields = [
  'designation',
  'variety',
  'winery',
];

const buildQuery = query => Object.keys(query)
  .reduce((acc, item) => {
    if (filtersWhitelist.includes(item)) {
      acc[item] = query[item];
    }
    return acc;
  }, {});

const buildSearch = search => searchFields
  .reduce((acc, field) => ([
    ...acc,
    { [field]: { $regex: new RegExp(`^.*${search}.*$`, 'i') } },
  ]), []);

// @TODO: Habilitar pesquisa para os principais campos
const getWines = async (req, res) => {
  try {
    const {
      limit = 12,
      page = 1,
      search,
      sort = '-createdAt',
    } = req.query;

    const query = buildQuery(req.query);

    if (search) {
      query.$or = buildSearch(search);
    }

    if (page < 1) return res.status(400).send('Página inválida.');

    const winesPromise = Wine.find(query)
      .limit(Number(limit))
      .skip(Number(limit * page - limit))
      .sort(sort);

    const countPromise = Wine.countDocuments(query);

    const [wines, count] = await Promise.all([winesPromise, countPromise]);

    return res.json({ wines, pages: Math.ceil(count / limit) });
  } catch (error) {
    return res.status(500).send('Erro interno no servidor.');
  }
};

const getWine = async (req, res) => {
  try {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) return res.status(400).send('ID inválido.');

    const wine = await Wine.findById(id);
    if (!wine) return res.status(404).send('Vinho não encontrado.');

    return res.json({ wine });
  } catch (error) {
    return res.status(500).send('Erro interno no servidor.');
  }
};

const createWine = async (req, res) => {
  try {
    const hasWine = await Wine.findOne({ designation: req.body.designation });
    if (hasWine) return res.status(409).send('Vinho já existe.');

    const wine = await Wine.create(req.body);
    return res.json({ wine });
  } catch (error) {
    return res.status(500).send('Erro interno no servidor.');
  }
};

const updateWine = async (req, res) => {
  try {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) return res.status(400).send('ID inválido.');

    const wine = await Wine.findByIdAndUpdate(id, req.body);
    return res.json({ wine });
  } catch (error) {
    return res.status(500).send('Erro interno no servidor.');
  }
};

const getVarieties = async (req, res) => {
  try {
    const varieties = await Wine.find().distinct('variety');

    return res.json({ varieties });
  } catch (error) {
    return res.status(500).send('Erro interno no servidor.');
  }
};

module.exports = {
  createWine,
  getVarieties,
  getWine,
  getWines,
  updateWine,
};
