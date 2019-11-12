const mongoose = require('mongoose');

const Wine = mongoose.Schema({
  country: { type: String, required: true },
  designation: { type: String, required: true },
  province: { type: String, required: true },
  region_1: String,
  region_2: String,
  variety: { type: String, required: true },
  winery: { type: String, required: true },
}, {
  timestamps: true,
});

Wine.index({
  country: 1,
  designation: 1,
  variety: 1,
  winery: 1,
});

module.exports = mongoose.model('wine', Wine);
