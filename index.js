// server middleware
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// hashing
const crypto = require('crypto');
const cipher = crypto.createCipher('aes192', 'ricflairheel');
const decipher = crypto.createDecipher('aes192', 'ricflairheel');

// server
const app = express();
const port = process.env.PORT || 3000;

// parse middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/build')));



// encryption
let encrypted = cipher.update('ric flair put WWE on the map', 'utf8', 'hex');
encrypted += cipher.final('hex');
let result = encrypted;
console.log(result);

// decryption
let decrypted = decipher.update(result, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);



















app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});