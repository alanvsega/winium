const express = require('express');

const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${port}...`);
});
