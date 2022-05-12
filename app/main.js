'use strict';

const express = require('express');
const app = express();
const path = require('path');

const home = require('./src/routes/home');

app.use(express.static(path.join(__dirname + '../public')));
app.set('views', path.join(__dirname, 'src/views/home'));
app.set('view engine', 'ejs');

app.use('/', home);

module.exports = app;