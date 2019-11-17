const Review = require('../models/Review');

const getReviews = async (req, res) => {
  try {
    const {
      query: {
        limit = 12,
        page = 1,
        sort = '-createdAt',
      },
      userId,
    } = req;

    if (page < 1 || limit < 1) return res.status(400).send('Página inválida.');

    const reviewsPromise = Review.find({ user: userId })
      .limit(Number(limit))
      .skip(Number(limit * page - limit))
      .sort(sort)
      .populate('wine');

    const countPromise = Review.countDocuments({ user: userId });

    const [reviews, count] = await Promise.all([reviewsPromise, countPromise]);

    return res.json({
      pages: Math.ceil(count / limit),
      reviews,
      total: count,
    });
  } catch (error) {
    return res.status(500).send('Erro interno no servidor.');
  }
};

module.exports = {
  getReviews,
};
