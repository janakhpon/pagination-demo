const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bluebird = require('bluebird');
const ejs = require('ejs');
const DBurl = require("./config/key").MongoURI;
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose
  .connect(DBurl, { useNewUrlParser: true })
  .then(() => {
    console.log(`Connected to ${DBurl}`);
  })
  .catch(err => {
    console.log(`Connection error: ${err} while connecting ${DBurl}`);
  });


port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log(`Demo is running on port : http://localhost:${port}`);
})
