const mongoose = require('mongoose');

const Wine = mongoose.Schema({
  description: { type: String,  required: true },
  points: { type: String,  required: true },
  price: Number,
  user: { type: mongoose.SchemaTypes.ObjectId, required: true, ref: 'user' },
  wine: { type: mongoose.SchemaTypes.ObjectId, required: true, ref: 'wine' },
}, {
  timestamps: true,
});

module.exports = mongoose.model('wine', Wine);
