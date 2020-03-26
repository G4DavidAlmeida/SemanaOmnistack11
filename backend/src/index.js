console.clear();
const express = require('express');

const app = express();
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

// middlewares
app.use(helmet());
app.use(express.json());
app.use(cors());

// routes
app.use('/', require('./routes'));

const port = process.env.PORT || 3333;
app.listen(port, () => console.log(`Server running on port ${port}`));