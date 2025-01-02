const express = require('express');
const app = express();
const httpLogger = require('morgan');
const cors = require('cors');
var admin = require("firebase-admin");
var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore()

require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(httpLogger('dev'));
app.use(cors()) 
app.use(express.urlencoded({ extended: false }))
app.use(express.json()) 


app.get('/status', (req, res) => {
  res.send('Hello World!')
});

app.post('/data', (req, res) => {
  let data = req.body
  console.log('trying to post the following data: ', data)
  res.send('Succes')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

module.exports = app;
module.exports = db;