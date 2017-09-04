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

function encryptText(text, callback) {
  let eText = cipher.update(text, 'utf8', 'hex');
  eText += cipher.final('hex');
  encryptedText = eText
  callback(encryptedText);
}

// decryption
function decryptText(hashedText, callback) {
  let dText = decipher.update(hashedText, 'hex', 'utf8');
  dText += decipher.final('utf8');
  decryptedText = dText
  callback(decryptedText);
}

// routing
app.post('/api/encrypt/:id', function handleEncrypt(req, res) {
  const name = req.body.name;
  const message = req.body.message;
  const date = req.body.date;
  const allTogether = `${name} ${message} ${date}`;
  console.log(req.body);
  encryptText(allTogether, function(eText) {
    res.send(eText);
  });
});

app.post('/api/decrypt/:id', function handleDecrypt(req, res) {
  decryptText(req.body.message, function(dText) {
    res.send(dText);
  });
});


app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});