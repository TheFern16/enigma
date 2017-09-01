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
let encryptedText;

function encryptText(string) {
  let eText = cipher.update(string, 'utf8', 'hex');
  eText += cipher.final('hex');
  encryptedText = eText;
}

encryptText('ric flair put WWE on the map');

// decryption
let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);

// routing

















app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});