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
  encryptText(allTogether, function(eText) {
    res.send(eText);
  });
});

app.post('/api/decrypt/:id', function handleDecrypt(req, res) {
  decryptText(req.body.encryptedMessage, function(resultOfCall) {
    const arr = resultOfCall.split(' ');
    const newDate = new Date(resultOfCall.split('-')[0], resultOfCall.split('-')[1] - 1, resultOfCall.split('-')[2].slice(0, 2), resultOfCall.split(':')[1], resultOfCall.split(':')[2].slice(0, 2), resultOfCall.split(':')[2].split('.')[1].slice(0,2))

    const updateMessage = {
      name:  arr[0],
      message: arr[1],
      date: newDate
    }
    res.send(updateMessage);
  });
});


app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});