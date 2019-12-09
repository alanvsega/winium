const { Types: { ObjectId } } = require('mongoose');

const Wine = require('../models/Wine');
const Review = require('../models/Review');

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

const addAverage = async wine => {
  const reviews = await Review.find({ wine: wine._id });
  const sum = reviews.reduce((acc, review) => (acc + review.points), 0);
  const average = reviews.length
    ? (sum / reviews.length).toFixed(2)
    : null;
  return { ...wine, average };
};

const getWines = async (req, res) => {
  try {
    const {
      limit = 120,
      page = 1,
      search = '',
      sort = '-createdAt',
    } = req.query;

    if (page < 1 || limit < 1) return res.status(400).send('Página inválida.');

    const query = buildQuery(req.query);

    if (search) {
      query.$or = buildSearch(search);
    }

    const winesPromise = Wine.find(query)
      .limit(Number(limit))
      .skip(Number(limit * page - limit))
      .sort(sort);

    const countPromise = Wine.countDocuments(query);

    const [wines, count] = await Promise.all([winesPromise, countPromise]);

    const averagePromises = wines.map(wine => addAverage(wine.toObject()));
    const winesWithAverage = await Promise.all(averagePromises);

    return res.json({
      pages: Math.ceil(count / limit),
      total: count,
      wines: winesWithAverage,
    });
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
    const varieties = await Wine.distinct('variety');

    return res.json({ varieties: varieties.sort() });
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
