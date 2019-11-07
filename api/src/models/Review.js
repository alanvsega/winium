const mongoose = require('mongoose');

const Review = mongoose.Schema({
  description: { type: String, required: true },
  points: { type: Number, required: true },
  price: Number,
  user: { type: mongoose.SchemaTypes.ObjectId, required: true, ref: 'user' },
  wine: { type: mongoose.SchemaTypes.ObjectId, required: true, ref: 'wine' },
}, {
  timestamps: true,
});

module.exports = mongoose.model('review', Review);
