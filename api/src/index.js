require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(express.json());
app.use(cors());

app.use(require('./middlewares/auth'));

app.use(require('./routes/User'));
app.use(require('./routes/Wine'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${port}...`);
});
