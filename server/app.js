const express = require('express');
var cors = require('cors');
const { default: axios } = require('axios');
const app = express();
const Routes = require('../Routes');

app.use(cors())
app.use(express.json());


app.use('/', Routes)

app.listen(4000, function () {
  console.log('Listening at port:4000');
});
