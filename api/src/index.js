require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${port}...`);
});
