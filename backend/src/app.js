console.clear();
const express = require('express');

const app = express();
const helmet = require('helmet');
const cors = require('cors');
const { errors } = require('celebrate');

require('dotenv').config();

// middlewares
app.use(helmet());
app.use(express.json());
app.use(cors());

// routes
app.use('/', require('./routes'));
app.use(errors())

module.exports = app;