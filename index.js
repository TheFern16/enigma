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
let decryptedText;

function encryptText(text) {
  let eText = cipher.update(text, 'utf8', 'hex');
  eText += cipher.final('hex');
  encryptedText = eText;
}

// decryption
function decryptText(hashedText) {
  let dText = decipher.update(hashedText, 'hex', 'utf8');
  dText += decipher.final('utf8');
  decryptedText = dText;
}

// routing
app.post('/api/encrypt/:id', function handleEncrypt(req, res) {
  encryptText(req.body.message);
  res.send(encryptedText);
});

app.post('/api/decrypt/:id', function handleDecrypt(req, res) {
  decryptText(req.body.message);
  res.send(decryptedText);
});






app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});