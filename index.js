const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const crypto = require('crypto');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/build')));

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});