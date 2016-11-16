
'use strict';

var express = require('express');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var renderView = require('./renderView');

const server = express();

server.use(morgan('dev')) // or tiny
server.use(express.static(__dirname + '/../public'));
server.use(favicon(__dirname + '/../public/img/favicon.ico'));
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.use((req, res) => {
  // Fetch relevant starter data from api here...
  res.send(renderView());
});

server.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
